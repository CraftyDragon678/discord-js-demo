import { CommandoClient } from 'discord.js-commando';
import path from 'path';
import { owner } from '@/config.json';

const bot = new CommandoClient({
  commandPrefix: '!',
  owner,
});

bot.registry
  .registerDefaults();

export default bot;
