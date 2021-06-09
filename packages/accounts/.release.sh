# ---
# This script could be used by release.sh in future version
#
# Require these env to upload source maps to Sentry:
# - SENTRY_AUTH_TOKEN
# - SENTRY_ORG
# - SENTRY_PROJECT
#
# Require these env to upload assets to GitHub:
# - GITHUB_TOKEN
# or call gh auth login before uploading.
#
# ---

PROJECT_NAME=accounts-site

function build-staging-sources() {
    npm run build:staging
}

function distribute-staging-assets() {
    npx sentry-cli releases new "$1-staging"
    npx sentry-cli releases files "$1-staging" upload-sourcemaps dist
    npx sentry-cli releases finalize "$1-staging"

    zip -r dist.zip dist
}

function build-release-sources() {
    npm run build
}

function distribute-release-sources() {
    npx sentry-cli releases new "$1"
    npx sentry-cli releases files "$1" upload-sourcemaps dist
    npx sentry-cli releases finalize "$1"

    rm dist.zip
    rm dist/**/*.map
    zip -r dist.zip dist

    if ! gh release create -p "$2" dist.zip --title "accounts-site-v$1" --notes ""; then
      return 1
    fi
}
