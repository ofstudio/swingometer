#!/usr/bin/env sh
set -e

DOCKER_MACHINE=oliver.scaleway
export COMPOSE_PROJECT_NAME=swingometer

echo "Building image"
docker build -t ${COMPOSE_PROJECT_NAME} .
docker save -o ${COMPOSE_PROJECT_NAME}.tar ${COMPOSE_PROJECT_NAME}

echo "Connecting to ${DOCKER_MACHINE}..."
eval $(docker-machine env ${DOCKER_MACHINE})
if [[ $? -ne 0 ]] ; then
    echo "Connection error."
    eval $(docker-machine env -u)
    exit 1
fi
echo "Connected"

if [[ $1 = "up" ]] ; then
  docker image load -i ${COMPOSE_PROJECT_NAME}.tar
  rm ${COMPOSE_PROJECT_NAME}.tar
  docker-compose up -d
fi

if [[ $1 = "down" ]] ; then
  docker-compose down --rmi local
fi

echo "Disconnecting from ${DOCKER_MACHINE}..."
eval $(docker-machine env -u)
echo "Done!"
