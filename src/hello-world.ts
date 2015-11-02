import { autoinject } from "aurelia-framework";
import { SayService } from "./say-service";

@autoinject
export class HelloWorld {

  constructor(private sayService: SayService) {
  }

  onButtonClick() {
    this.sayService.sayHello();
  }
}
