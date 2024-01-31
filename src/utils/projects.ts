// TODO: Integrate useQuery from apollo with caching and proper typing

import { ProjectCardType } from "./types";

export async function fetchPinnedProjects() {
    const endpoint = process.env.GITHUB_GRAPHQL_URL as string;
    const headers = {
        "content-type": "application/json",
        Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
    };
    const graphqlQuery = {
        operationName: "fetchPinnedRepos",
        query: `fragment PinnedRepos on User {
  pinnedItems(
    types: [REPOSITORY]
    first: 6
  ) {
    nodes{
      __typename
    ... on Repository {
      name
      createdAt
      description
      url
      languages (first: 3) {
        nodes{
          name
        }
      }
    }
    }
    totalCount
  }
}

query fetchPinnedRepos ($login: String!){
  user(login: $login) {
    bio
    ...PinnedRepos
    }
}`,
        variables: { login: process.env.GITHUB_USERNAME },
    };

    const options: RequestInit = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(graphqlQuery),
        cache: "force-cache",
    };

    const response = await fetch(endpoint, options);
    const data = await response.json();
    return pinnedProjectsDefaults(data);
}

type PinnedRepoResponseType = {
    __typename: string;
    name: string;
    createdAt: string;
    description: string | null;
    url: string;
    languages: { nodes: { name: string }[] };
};

export function pinnedProjectsDefaults(
    data: any
): (ProjectCardType | null)[] | null {
    if (data?.data?.user?.pinnedItems?.nodes) {
        const repos: PinnedRepoResponseType[] =
            data.data.user.pinnedItems.nodes;
        console.log("Fetched data, should be 'nodes' list: ", repos);
        return repos.map((r) => {
            if (!r) {
                return null;
            }
            return {
                title: r.name,
                createdAt: new Date(r.createdAt),
                description: r.description || "No Description",
                githubUrl: r.url,
                languages: r.languages.nodes,
            };
        });
    }
    return null;
}
