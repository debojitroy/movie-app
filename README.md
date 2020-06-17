# Awesome Movie App

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://badgen.net/badge/icon/typescript?icon=typescript&label)

This is a sample project to demonstrate how to take a concept from idea to production. The thought process and the steps behind it are discussed in detail in 4 part blog post.

- [Part One : Wireframes and Project Setup](https://debojitroy.com/blogs/react-idea-to-production-part-one)

- [Part Two : Setting up a Component Library](https://debojitroy.com/blogs/react-idea-to-production-part-two)

- [Part Three : Building the Movie App using component library](https://debojitroy.com/blogs/react-idea-to-production-part-three/)

- [Part Four: Hosting the Movie app and setting up CI/CD](https://debojitroy.com/blogs/react-idea-to-production-part-four/)

Component Library Demo is available [here](https://d3f0roag7dlk8c.cloudfront.net/)

Movie App Demo is available [here](https://d1c9s36vd9mohd.cloudfront.net/)

## Projects

- [Core](packages/core/README.md) : Common shared library for all projects
- [Components](packages/components/README.md): Core Components library and Design System
- [WebApp](packages/webapp/README.md): Awesome Movie App Web Application

## Setting up the Project

### Initial Setup

If you are pulling down the project for first time, go to the root folder and run

```shell
yarn
```

#### Adding a new dependency across packages

```shell
lerna add <dependency> --dev # For development dependencies

lerna add <dependency> # For production dependencies
```

#### Adding a project specific dependency

```shell
lerna add <dependency> --scope=<sub-project-name> # Sub project name can be found from individual package.json
```

### Running the Projects

Before running any of the projects, please make sure all dependencies are installed as mentioned in the initial setup.

#### Building Components

Follow the steps mentioned [here](packages/components/README.md)

#### Building Core

Follow the steps mentioned [here](packages/core/README.md)

#### Running Webapp

Follow the steps mentioned [here](packages/webapp/README.md)
