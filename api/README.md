# API
The same API surface is written in two different languages.  Here are some interesting differences:
| Language | Framework | Lines of Code | Dependencies | URL      |
| -------- | --------- | ------------- | ------------ | -------- |
| NodeJS   | Express   | x             | x            | https:// |
| Python   | Chalice   | x             | x            | https:// |

## NodeJS
The Node version uses [Express](https://expressjs.com/), a fast, unopinionated, minimalist web framework.

## Python
The Python version uses [Chalice](https://aws.github.io/chalice/index), a serverless microframework for running Python in AWS Lambda.

## Why?
When implementing the same thing across languages, it's easier to see the strengths and weaknesses of each.