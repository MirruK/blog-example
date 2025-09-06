import type { CodegenConfig } from "@graphql-codegen/cli";
import { configDotenv } from "dotenv";

const env = configDotenv();
if (env.error && !process.env.GITHUB_API_TOKEN) {
  console.error(
    "Could not load .env or GITHUB_API_TOKEN not defined in the environment"
  );
  process.exit(1);
}

const config: CodegenConfig = {
  generates: {
    "src/utils/graphql/gen/pinnedRepos.ts": {
      schema: {
        ["https://api.github.com/graphql"]: {
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
