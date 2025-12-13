# Personal website/blog made with Next.js

## Running a development version

To run the dev server all you need to do is to:

1. Define your .env file
    - Contentful api key (CONTENTFUL_API_TOKEN)
    - Contentful space (CONTENTFUL_SPACE)
    - Github API key (GITHUB_API_TOKEN)
    - Github username (GITHUB_USERNAME)
    - LinkedIn id (LINKED_IN_USER_ID)
    - Email address (EMAIL)
2. Run `npm install`
3. Run `npm run codegen`
4. Run the development server with `npm run start`

This will open a nextjs development server. Now all you need to do
is to start developing.

## Deploy

The simplest way to run this project is with docker using
the publicly available images built by the CI.

1. Run `docker pull <image:tag>`
    - The image name and tag can be found in the packages section of the repository
2. Create a .env file where you define the following:
    - Contentful api key (CONTENTFUL_API_TOKEN)
    - Contentful space (CONTENTFUL_SPACE)
    - Github API key (GITHUB_API_TOKEN)
    - Github username (GITHUB_USERNAME)
    - LinkedIn id (LINKED_IN_USER_ID)
    - Email address (EMAIL)

3. Create a Contentful account, this can be done for free using your github account.
4. Add the appropriate content model into your contentful space
    - The content model in contentful has two text fields: "title" and "description", and a long markdown text field "postContent"
5. Run the docker container, mapping port 3000 inside the container to the desired port your host machine
6. Profit


