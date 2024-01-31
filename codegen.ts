import type { CodegenConfig } from "@graphql-codegen/cli";
import { configDotenv } from "dotenv";

const env = configDotenv();
if (env.error) process.exit(1);

const config: CodegenConfig = {
    generates: {
        "src/utils/graphql/gen/pinnedRepos.ts": {
            schema: {
                [`${process.env.GITHUB_GRAPHQL_URL}`]: {
                    headers: {
                        Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
                        "User-Agent":
                            "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
                    },
                },
            },
            documents: ["src/utils/graphql/*.gql"],
            plugins: ["typescript"],
            config: {
                useTypeImports: true,
            },
        },
    },
};
export default config;
