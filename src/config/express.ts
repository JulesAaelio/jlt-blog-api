import express from 'express';
import { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app:Application = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/public', express.static('public'));

export {app}
