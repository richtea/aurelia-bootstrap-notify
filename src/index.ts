import { SayService } from "./say-service";
import { HelloWorld } from "./hello-world";

export function configure(config) {
  config.globalResources("./hello-world");
}
