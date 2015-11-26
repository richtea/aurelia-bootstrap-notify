var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require("aurelia-framework");
var say_service_1 = require("./say-service");
var HelloWorld = (function () {
    function HelloWorld(sayService) {
        this.sayService = sayService;
    }
    HelloWorld.prototype.onButtonClick = function () {
        this.sayService.sayHello();
    };
    HelloWorld = __decorate([
        aurelia_framework_1.autoinject, 
        __metadata('design:paramtypes', [say_service_1.SayService])
    ], HelloWorld);
    return HelloWorld;
})();
exports.HelloWorld = HelloWorld;
