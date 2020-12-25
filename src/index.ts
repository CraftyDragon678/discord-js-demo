import bot from "./bot";
import { token } from '@/config.json';

bot.login(token);

bot.on('ready', () => {
  console.log('ready');
});

const shutdown = (signal: NodeJS.Signals) => {
  console.log(signal);
  bot.destroy();
  process.exit(0);
}

(<NodeJS.Signals[]>['SIGINT', 'SIGTERM', 'SIGUSR2']).forEach((signal) => {
  process.on(signal, shutdown);
});
