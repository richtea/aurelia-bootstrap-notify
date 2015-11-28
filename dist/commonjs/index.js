var hello_world_1 = require("./hello-world");
exports.HelloWorld = hello_world_1.HelloWorld;
var say_service_1 = require("./say-service");
exports.SayService = say_service_1.SayService;
function configure(config) {
    config.globalResources("./hello-world");
}
exports.configure = configure;
