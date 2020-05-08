# ECS Track

## Getting Started

You need to install ECS Track and set API credentials before you get started

If you not installed yet, you can install using below options

1. [DigitalOcean One Click Installation](https://marketplace.digitalocean.com/apps/caprover?action=deploy&refcode=27013eb71a06)  
2. [Installing by your own](https://github.com/e-commerce-suite/ShipTrack#installing-shiptrack---in-5-minutes)

## Installation

```shell script
npm i ecs-sdk -S
```

## Usage

```js
/**
 * Main application file
 */
if (!process.env.DOMAIN) {
  process.env.ECS_TRACK_SECRET = '<secret-token>';
}

if (!process.env.OMNILOGIN_URL) {
  process.env.ECS_TRACK_SECRET = 'https://track.yourdomain.com';
}

const http = require('http');
const express = require('express');

const bodyParser = require('body-parser');
const omnilogin = require('@shoppre/omnilogin');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/secured', omnilogin.authenticate, (req, res) => {
  return res.json(req.user);
  // - req.user show user details, only if user session is active and url is secured by OmniLogin
});

server.listen(8000, '0.0.0.0', (err) => {
  if (err) return console.log('Error while starting nodejs', err);
  return console.log('Server started');
});
```
