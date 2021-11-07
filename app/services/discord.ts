import consola from "consola";
import { Client, Intents } from "discord.js";

export function createClient(token: string) {
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES]
  });

  client.once("ready", () => {
    consola.log("Discord Bot ready");
  });

  client.login(token);
  return client;
}
