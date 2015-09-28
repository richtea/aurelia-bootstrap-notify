
export function configure(config) {
  config.globalResources("./hello-world");
}

//import { LogManager } from "aurelia-framework";
//import { Logger } from "aurelia-logging";

export class SayService {
  private logger: Logger;

  sayHello() {
    this.logger = LogManager.getLogger("MyPlugin");
    this.logger.info("Hello, world!");
  }
}

                                                                                             

//@autoinject
export class HelloWorld {

  constructor(private sayService: SayService) {
  }

  onButtonClick() {
    this.sayService.sayHello();
  }
}

//import { LogManager } from "aurelia-framework";
//import { Logger } from "aurelia-logging";

export class SayService {
  private logger: Logger;

  sayHello() {
    this.logger = LogManager.getLogger("MyPlugin");
    this.logger.info("Hello, world!");
  }
}

