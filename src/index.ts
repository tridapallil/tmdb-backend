import 'dotenv/config';
import routes from './routes';

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3333);
