FROM node:16.17.0-alpine AS runner
WORKDIR /app

MAINTAINER tidb-community

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
COPY ./next.config.js ./next.config.js
COPY ./sentry.server.config.js ./sentry.server.config.js ./
COPY ./sentry.client.config.js ./sentry.client.config.js ./
COPY ./sentry.properties ./sentry.properties

# Copy locales
RUN mkdir -p packages/i18n
COPY ./packages/i18n/locales ./packages/i18n/locales

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=nextjs:nodejs ./.next/standalone ./
COPY --chown=nextjs:nodejs ./public ./

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
