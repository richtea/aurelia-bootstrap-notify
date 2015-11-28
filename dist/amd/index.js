define(["require", "exports", "./hello-world", "./say-service"], function (require, exports, hello_world_1, say_service_1) {
    exports.HelloWorld = hello_world_1.HelloWorld;
    exports.SayService = say_service_1.SayService;
    function configure(config) {
        config.globalResources("./hello-world");
    }
    exports.configure = configure;
});
