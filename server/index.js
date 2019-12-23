import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import {} from 'dotenv/config';
import routes from './routes';

const app = express();
const port = process.env.PORT || 8000;

app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/v1', routes);

app.listen(port);

export default app;
