# Quick Overview

Microfrontends are used to divide a large app into a series of smaller apps. This provides a set of unique benefits to any frontend:

Author smaller, easier to understand codebases

Use a different set of libraries for each sub-app - bring the best tool for the job!

Deploy each portion separately - limit the chance of interrupting your users

Allow each of your engineering teams to work independently

## Getting started

```sh
git clone https://github.com/jsflor/run-time-micro-fe.git
cd run-time-micro-fe
```

### Set up products microfrontend (remote)

```sh
cd products
npm ci
npm start
```

### Set up cart microfrontend (remote)

```sh
cd cart
npm ci
npm start
```

### Set up container (host)

```sh
cd container
npm ci
npm start
```

Then open [http://localhost:8080/](http://localhost:8080/) to see your app.<br>