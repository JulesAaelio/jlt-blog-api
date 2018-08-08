#!/usr/bin/env bash

git remote add deploy $deploy_uri
git branch
git checkout master -f
git add -f .env && git commit -m "$TRAVIS_COMMIT_MESSAGE" # Forcefully add the ignored files.
git tag build/$TRAVIS_BUILD_NUMBER #Tag the commit so it's easy to roll back to previous build.
git push --force deploy master