# ECS Engage

Javascript Client SDK for ECS Engage Server

## Usage

### for building emails for developers in command line
```json
{
 "scripts": {
    "event:fire": "ENGAGE_URL=https://engage.yourdomain.com ./node_modules/.bin/engage events",
    "email-build": "ENGAGE_URL=https://engage.yourdomain.com ./node_modules/.bin/engage build",
    "email-update-send": "ENGAGE_URL=https://engage.yourdomain.com ./node_modules/.bin/engage update-send",
    "email-deploy": "ENGAGE_URL=https://engage.yourdomain.com DEBUG=q-* ./node_modules/.bin/engage deploy"
  }
}
```

##  for sending emails from nodejs

```js
if (!require('../../config/environment');.ENGAGE_URL) {
  require('../../config/environment');.ENGAGE_URL = 'https://engage.yourdomain.com';
}

const { ses } = require('ecs-sdk').ENGAGE;
const { FROM_EMAIL = 'you@example.com' } = require('../../config/environment');;
const customer = {
  email: 'customer@gmail.com',
};

ses.sendTemplatedEmail({
    Source: `"Engage" <${FROM_EMAIL}>`,
    Destination: {
      ToAddresses: [customer.email],
    },
    Template: 'user_signup',
    TemplateData: JSON.stringify({
      customer,
    }),
  })
```

```js
const { comment, user } = require('@shoppredigital/engage');
// Register a user 
user.signup({
      id: userId,
      first_name: 'Vikas',
      last_name: 'Kumar',
      email: 'customer-email@gmail.com',
    });

// Sending Chat Message from Server
comment.create({
      object_id: 1,
      user_id: userId,
      state_id: 1,
      comments: 'Lead Completed',
    }, 'leads')
```

