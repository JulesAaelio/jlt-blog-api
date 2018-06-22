let gulp = require('gulp');
let nodemon = require('gulp-nodemon');

gulp.task('serve',() => {
    nodemon({
        // the script to run the app
        script: './src/index.js',
        // this listens to changes in any of these files/routes and restarts the application
        watch: ["src/*.js", 'src/**/*.js'],
        env: {
            "COOKIE_SECRET": "1245",
            "DATABASE": "nodetest",
            "DB_USER": "datauser",
            "DB_PASSWORD": "toto",
            "DB_HOST": "localhost",
            "DB_DIALECT": "mysql",
            "SRV_PORT": 3500,
            "OAUTH_SERVER" : 'http://api.perso.local',
            "OAUTH_CLIENT_ID" : "2_4gbt5cvqpeo0skgwcowwg080ggwcsccoo04w8s44og00gs8cso",
            "OAUTH_CLIENT_SECRET" : "1u8v7lk9ic4gkk48kwk8oog8cc4wkcg484w4w8o0cc4os44g0s",
            "OAUTH_CALLBACK": "http://localhost:3500"
        },
    })
});
