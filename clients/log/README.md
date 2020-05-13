# Log

#### Installation:
 
```shell script
npm i @shoppredigital/log --save
```

#### Usage:

```js
const log = require('@shoppredigital/log');

const express = require('express'),
    bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

log.init(app, { LOG_DSN: 'http://localhost:8800/projectname', logger: console | winstonLogger })

```

- Server - [github.com/shoppredigital/log](https://github.com/shoppredigital/log)
