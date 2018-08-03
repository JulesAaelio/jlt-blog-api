const writeFile = require('fs').writeFile;
console.log(process.env)
const env = {
    DATABASE: process.env.DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_DIALECT: process.env.DB_DIALECT,
    SRV_PORT: process.env.SRV_PORT,
    OAUTH_SERVER: process.env.OAUTH_SERVER,
};

// const toWrite = 'export const environment = ' + JSON.stringify(env, null, '  ').replace(/\"([^(\")"]+)\":/g, '$1:') + ';';
let toWrite ="";
for (let prop in env) {
    if (env.hasOwnProperty(prop)) {
        toWrite += prop + '=';
        console.log(typeof env[prop])
        if(typeof env[prop] === 'string')
            toWrite += '"' + env[prop] + '"';
        else
            toWrite += env[prop];
        toWrite += '\n'
    }
}

writeFile('.env', toWrite, (err => {
    if (err) {
        console.log(err);
    }
}));
