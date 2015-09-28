function configure(config) {
    config.globalResources("./hello-world");
}
configure = configure;
class SayService {
    constructor() {
    }
    sayHello() {
        this.logger = LogManager.getLogger("MyPlugin");
        this.logger.info("Hello, world!");
    }
}
SayService = SayService;
class HelloWorld {
    constructor(sayService) {
        this.sayService = sayService;
    }
    onButtonClick() {
        this.sayService.sayHello();
    }
}
HelloWorld = HelloWorld;
class SayService {
    constructor() {
    }
    sayHello() {
        this.logger = LogManager.getLogger("MyPlugin");
        this.logger.info("Hello, world!");
    }
}
SayService = SayService;
