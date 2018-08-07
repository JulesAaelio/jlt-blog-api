const writeFile = require('fs').writeFile;
console.log(process.env);
const app_env = {
    DATABASE: process.env.DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_DIALECT: process.env.DB_DIALECT,
    SRV_PORT: process.env.SRV_PORT,
    OAUTH_SERVER: process.env.OAUTH_SERVER,
};

// const toWrite = 'export const environment = ' + JSON.stringify(app_env, null, '  ').replace(/\"([^(\")"]+)\":/g, '$1:') + ';';

let toWrite = stringify(app_env);

writeFile('.env', toWrite, (err => {
    if (err) {
        console.log(err);
    }
}));


const host_env = {
    MYSQL_ROOT_PASSWORD: process.env.ROOT_PASSWORD,
    MYSQL_USER: process.env.DB_USER,
    MYSQL_PASSWORD: process.env.DB_PASSWORD,
    MYSQL_DATABASE: process.env.DATABASE,
};
toWrite = stringify(host_env, true);
writeFile('set_host_env.sh', toWrite, (err => {
    if (err) {
        console.log(err);
    }
}));


function stringify(env, shouldExport = false) {
    let toWrite = "";
    for (let prop in env) {
        if (env.hasOwnProperty(prop)) {
            if (shouldExport) {
                toWrite += 'export '
            }
            toWrite += prop + '=';
            if (typeof env[prop] === 'string' && !shouldExport)
                toWrite += '"' + env[prop] + '"';
            else
                toWrite += env[prop];
            toWrite += '\n'
        }
    }
    return toWrite;
}