
export { HelloWorld } from "./hello-world";
export { SayService } from "./say-service";

export function configure(config) {
  config.globalResources("./hello-world");
}
