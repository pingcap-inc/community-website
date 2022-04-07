export ENVIRONMENT=$1
export DOCKER_CONTAINER_NAME=$2
export DOCKER_REGISTRY_ADDRESS=$3
export DOCKER_REGISTRY_NAMESPACE=$4
export DOCKER_IMAGE_NAME=$5
export DOCKER_IMAGE_TAG=$6

cd ${ENVIRONMENT} && docker-compose pull && docker-compose down && docker-compose up -d
