let gulp = require('gulp');
let nodemon = require('gulp-nodemon');

gulp.task('serve',() => {
    nodemon({
        // the script to run the app
        script: './src/index.js',
        // this listens to changes in any of these files/routes and restarts the application
        watch: ["src/*.js", 'src/**/*.js'],
    })
});
