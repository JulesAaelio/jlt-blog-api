const writeFile = require('fs').writeFile;
const app_env = {
    DATABASE: process.env.DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_DIALECT: process.env.DB_DIALECT,
    SRV_PORT: process.env.SRV_PORT,
    OAUTH_SERVER: process.env.OAUTH_SERVER,
    MYSQL_ROOT_PASSWORD: process.env.ROOT_PASSWORD,
};

let toWrite = stringify(app_env);

writeFile('.env', toWrite, (err => {
    if (err) {
        console.log(err);
    }
}));


function stringify(envObject, shouldExport = false) {
    let toWrite = "";
    for (let prop in envObject) {
        if (envObject.hasOwnProperty(prop)) {
            if (shouldExport) {
                toWrite += 'export '
            }
            toWrite += prop + '=' + envObject[prop];
            toWrite += '\n'
        }
    }
    return toWrite;
}