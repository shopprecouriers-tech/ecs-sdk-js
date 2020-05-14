# ECS SDK for JavaScript

[![codecov](https://codecov.io/gh/goECS/ecs-sdk-js/branch/master/graph/badge.svg?token=PNT95664BY)](https://codecov.io/gh/goECS/ecs-sdk-js)

## Installation

```shell script
npm i ecs-sdk --save
```

## Usage for inventory 

```shell script
PREFIX=https:// # defaults to https://
DOMAIN=yourdomain.com
SECRET=<super-secret>

# for lib/logger
SENTRY_DSN=<sentry-dsn>
```

```js

// import entire SDK
var ECS = require('ecs-sdk');

// import ECS object without services
var ECS = require('ecs-sdk/global');

// import individual service
var TRACK = require('ecs-sdk/servers/track');

// import logger
var logger = require('ecs-sdk/lib/logger');

``
