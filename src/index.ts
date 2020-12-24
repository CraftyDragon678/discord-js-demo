import bot from "./bot";
import { token } from '@/config.json';

bot.login(token);

bot.on('ready', () => {
  console.log('ready');
});

const shutdown = (signal: NodeJS.Signals) => {
  let done = false;
  return (() => {
    if (!done) {
      done = true;
      console.log(signal);
      bot.destroy();
    }
  });
}

(<NodeJS.Signals[]>['SIGINT', 'SIGTERM', 'SIGUSR2']).forEach((signal) => {
  process.on(signal, shutdown(signal));
});
