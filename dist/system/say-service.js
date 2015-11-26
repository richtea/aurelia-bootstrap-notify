System.register(["aurelia-framework"], function(exports_1) {
    var aurelia_framework_1;
    var SayService;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            SayService = (function () {
                function SayService() {
                }
                SayService.prototype.sayHello = function () {
                    this.logger = aurelia_framework_1.LogManager.getLogger("TestPlugin");
                    this.logger.info("Hello, world!");
                };
                return SayService;
            })();
            exports_1("SayService", SayService);
        }
    }
});
