define(["require", "exports"], function (require, exports) {
    function configure(config) {
        config.globalResources("./hello-world");
    }
    exports.configure = configure;
});
