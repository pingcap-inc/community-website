# Initialize Strapi for Your Local Development

1. Once running `npm run dev`, the Strapi application will be launched at http://localhost:1337/ by default.
2. Add a `.env` file to the `packages/strapi` folder with the same environment variables copied from `packages/strapi/env.template`. You're required to complete the env settings for email and credential for both LOCAL and SOURCE applications.
3. Anytime if you'd like to sync your local Strapi with a remote Strapi configured as the source, you can execute `npm run sync` under this strapi folder or `npm run strapi:sync` at the root.
