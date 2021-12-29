import express from 'express';
import { router } from './routes/app.routes';
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use('/', router);
app.listen(process.env.PORT, () => console.log(`Servidor iniciado na porta ${process.env.PORT}!`));