let gulp = require('gulp');
let nodemon = require('gulp-nodemon');

gulp.task('serve',() => {
    nodemon({
        // the script to run the app
        script: './src/index.js',
        // this listens to changes in any of these files/routes and restarts the application
        watch: ["src/*.js", 'src/**/*.js'],
        env: {
            "DATABASE": "juleslaurentblogapi",
            "DB_USER": "datauser",
            "DB_PASSWORD": "toto",
            "DB_HOST": "db",
            "DB_DIALECT": "mysql",
            "SRV_PORT": 3500,
            "OAUTH_SERVER" : 'http://api.perso.local',
        },
    })
});
