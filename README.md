# DNS Control

![Main Push](https://github.com/mattcanty/dns/actions/workflows/main-push.yaml/badge.svg)

This is how I like to manage my DNS. The configuration is targeting Route53. At any time I could flip over to CloudFlare or any other beeswax.

It's all public like this becasue DNS is public.

Until 2022-02-03 this was running in CircleCI. For some reason something broke, so I switched it over to GitHub Actions.

## Federated AWS Access

The GitHub Action makes use of Federated AWS access to reduce the need for keys in this repository. The same repository also declares the policies for these Actions.
