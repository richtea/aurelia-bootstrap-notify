define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    var SayService = (function () {
        function SayService() {
        }
        SayService.prototype.sayHello = function () {
            this.logger = aurelia_framework_1.LogManager.getLogger("TestPlugin");
            this.logger.info("Hello, world!");
        };
        return SayService;
    })();
    exports.SayService = SayService;
});
