const http = require('http');
const Bot = require('messenger-bot');
const dotenv = require('dotenv');

dotenv.config();

const botSettings = {
  token: process.env.PAGE_TOKEN,
};

if (process.env.VERIFY_TOKEN) {
  botSettings.verify = process.env.VERIFY_TOKEN;
}
if (process.env.APP_SECRET) {
  botSettings.verify = process.env.APP_SECRET;
}

const bot = new Bot(botSettings);

bot.on('error', err => {
  console.log(err.message);
});

const port = process.env.PORT || 8080;
const ip = process.env.IP || '0.0.0.0';

http.createServer(bot.middleware()).listen(port, ip, () => {
  console.log(`Server listening at ${ip}:${port}`);
});
