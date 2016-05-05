const http = require('http');
const BotFactory = require('messenger-bot');

const bot = new BotFactory({
  token: 'EAAIvoT1Uwy4BANjTEMmbD7NZCCkTD9CZCZAmJF8MFq7EagIU2ObOZBhFFfOx3pLgb8jvuS3oZB14wQWi320ZCrb2hY6JbVK3GL9v4C617IRw8jcIs51yZCN5vZBDbvYbuS4s7ausLx9rovFQV0gXuDFQ9nrvh3MBorZC2BxflRdGjJAZDZD',
  veify: 'you_shall_not_pass',
});

bot.on('error', err => {
  console.log(err.message);
});

const port = process.env.PORT || 8080;
const ip = process.env.IP || '0.0.0.0';

http.createServer(bot.middleware()).listen(port, ip, () => {
  console.log(`Server listening at ${ip}:${port}`);
});
