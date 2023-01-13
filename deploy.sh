#!/usr/bin/env sh
set -e

HOST=roofbeam.timeweb

if [[ $1 = "up" ]] ; then
  docker --context ${HOST} compose up --build -d
fi

if [[ $1 = "down" ]] ; then
  docker --context ${HOST} compose down --rmi local
fi
