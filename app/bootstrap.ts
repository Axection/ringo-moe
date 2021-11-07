import { Client } from "discord.js";
import { createClient } from "./services/discord";

export class RingoMoe {
  private client: Client;

  constructor(token: string) {
    this.client = createClient(token);
  }

  start() {

  }
}

export default RingoMoe;
