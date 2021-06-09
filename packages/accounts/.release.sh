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
    local version=$1

    npx sentry-cli releases new "$version-staging"
    npx sentry-cli releases files "$version-staging" upload-sourcemaps dist
    npx sentry-cli releases finalize "$version-staging"

    zip -r dist.zip dist
}

function build-release-sources() {
    npm run build
}

function distribute-release-sources() {
    local version=$1
    local tag=$2

    npx sentry-cli releases new "$version"
    npx sentry-cli releases files "$version" upload-sourcemaps dist
    npx sentry-cli releases finalize "$version"

    rm dist.zip
    rm dist/**/*.map
    zip -r dist.zip dist

    if ! gh release create -p "$tag" dist.zip --title "accounts-site-v$version" --notes ""; then
      return 1
    fi
}
