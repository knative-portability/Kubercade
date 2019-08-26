# Kubercade

[![CircleCI](https://circleci.com/gh/knative-portability/Kubercade.svg?style=svg)](https://circleci.com/gh/knative-portability/Kubercade)

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

Serverless containerized social arcade built on [Knative](https://knative.dev/).

## Deploy

This app easily deploys to any platform built on [Knative](https://knative.dev/). You can try it on [Google Cloud Run](https://cloud.google.com/run/) using this button.

[![Run on Google Cloud](https://storage.googleapis.com/cloudrun/button.svg)](https://console.cloud.google.com/cloudshell/editor?shellonly=true&cloudshell_image=gcr.io/cloudrun/button&cloudshell_git_repo=https://github.com/knative-portability/Kubercade.git)

You also need to setup a PostgreSQL database and initialize it by executing [src/.schema.sql](src/.schema.sql). Once you've done that, enter its connection string when prompted by Google Cloud Shell.
I.e. `postgres://{username}:{password}@{host}/{database}`
