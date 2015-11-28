System.register(["./hello-world", "./say-service"], function(exports_1) {
    function configure(config) {
        config.globalResources("./hello-world");
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (hello_world_1_1) {
                exports_1({
                    "HelloWorld": hello_world_1_1["HelloWorld"]
                });
            },
            function (say_service_1_1) {
                exports_1({
                    "SayService": say_service_1_1["SayService"]
                });
            }],
        execute: function() {
        }
    }
});
