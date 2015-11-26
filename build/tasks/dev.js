var gulp = require('gulp');
var tools = require('aurelia-tools');
var tsConfigGlob = require("tsconfig-glob"); 

gulp.task('update-own-deps', function(){
  tools.updateOwnDependenciesFromLocalRepositories();
});

gulp.task('build-dev-env', function () {
  tools.buildDevEnv();
});

gulp.task("tsconfig-glob", function () {  
    return tsConfigGlob({
        configPath: "src",
        indent: 2
    });
});