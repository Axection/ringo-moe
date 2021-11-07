import consola from "consola";
import RingoMoe from "./app/bootstrap";

consola.log("hello");

const ringo = new RingoMoe(process.env.DISCORD_TOKEN ?? "");
ringo.start();
