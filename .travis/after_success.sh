#!/usr/bin/env bash

git add -f .env set_host_env.sh && git commit -m "$TRAVIS_COMMIT_MESSAGE" # Forcefully add the ignored files.
git tag build/$TRAVIS_BUILD_NUMBER #Tag the commit so it's easy to roll back to previous build.
git push deploy master