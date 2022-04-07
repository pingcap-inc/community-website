export $ENVIRONMENT=$1
export $DEPLOY_PATH=$2
export $DOCKER_CONTAINER_NAME=$3
export $DOCKER_REGISTRY_ADDRESS=$4
export $DOCKER_REGISTRY_NAMESPACE=$5
export $DOCKER_IMAGE_NAME=$6
export $DOCKER_IMAGE_TAG=$7

$DOCKER_COMPOSE_FILEPATH="${ENVIRONMENT}/docker-compose.yaml"

cd ${DOCKER_COMPOSE_FILEPATH} && docker-compose pull && docker-compose down && docker-compose up -d

