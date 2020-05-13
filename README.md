# omni-sdk-js


## Installation

```shell script
npm i ecs-sdk --save
```

## Usage for inventory 

```shell script
ECS_BOX_DOMAIN=yourdomain.com
ECS_BOX_SECRET=<super-secret>
```

```js

// import entire SDK
var ECS = require('omni-sdk');

// import ECS object without services
var ECS = require('ecs-sdk/global');

// import individual service
var TRACK = require('ecs-sdk/servers/track');

``
