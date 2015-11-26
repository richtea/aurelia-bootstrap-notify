export { SayService } from "./say-service";
export { HelloWorld } from "./hello-world";

export function configure(config) {
  config.globalResources("./hello-world");
}
