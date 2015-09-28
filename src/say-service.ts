/// <reference path="./_references.ts"/>

import { LogManager } from "aurelia-framework";
// import { Logger } from "aurelia-logging";

export class SayService {
  private logger: Logger;

  sayHello() {
    this.logger = LogManager.getLogger("MyPlugin");
    this.logger.info("Hello, world!");
  }
}
