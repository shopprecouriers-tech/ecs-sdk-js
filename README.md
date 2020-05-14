# ECS SDK for JavaScript


## Installation

```shell script
npm i ecs-sdk --save
```

## Usage for inventory 

```shell script
PREFIX=https:// # defaults to https://
DOMAIN=yourdomain.com
SECRET=<super-secret>
```

```js

// import entire SDK
var ECS = require('ecs-sdk');

// import ECS object without services
var ECS = require('ecs-sdk/global');

// import individual service
var TRACK = require('ecs-sdk/servers/track');

``
