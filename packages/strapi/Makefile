GIT_COMMIT        := $(shell git rev-parse --short HEAD)
NOW_TIMESTAMP     := $(shell date +%s)
IMAGE_PREFIX      := strapi-tidbio-cms
DOCKER_REGISTRY   := registry.cn-hangzhou.aliyuncs.com/pingcap-ee/

dev-build: image_name := $(IMAGE_PREFIX):DEV_$(NOW_TIMESTAMP)
publish: image_name := $(IMAGE_PREFIX):$(GIT_COMMIT)

.PHONY: help build
.DEFAULT_GOAL := help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

dev-build: ## build docker image for local develop
	docker build . -t $(image_name)

publish: check-git-status  ## build docker image and publish to docker registry
	docker build . -t $(image_name)
	docker tag $(image_name) $(DOCKER_REGISTRY)$(image_name)
	docker push $(DOCKER_REGISTRY)$(image_name)

check-git-status:  ## check if repo is dirty
	@status=$$(git status --porcelain); \
    if test "x$${status}" = x; then \
    	echo Working directory is clean >&1; \
    else \
        echo Working directory is dirty >&2; \
    fi
