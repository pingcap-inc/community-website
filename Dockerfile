FROM node:16.14.0-alpine AS runner
WORKDIR /app

MAINTAINER tidb-community

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
COPY ./next.config.js ./next.config.js
COPY ./public ./public
COPY ./package.json ./package.json

#COPY ./.env ./.env
COPY ./.env.preview ./.env.preview
COPY ./.env.production ./.env.production

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=nextjs:nodejs ./.next/standalone ./standalone
COPY --chown=nextjs:nodejs ./.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
