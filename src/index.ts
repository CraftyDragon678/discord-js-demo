import bot from "./bot";
import { token } from '@/config.json';

bot.login(token);

bot.on('ready', () => {
  console.log('ready');
});

const shutdown = (signal: NodeJS.Signals) => () => {
  console.log('bye', signal);
  bot.destroy();
}

process.on('SIGINT', shutdown('SIGINT'));
process.on('SIGUSR2', shutdown('SIGUSR2'));
