import express from 'express';
import { router } from './routes/app.routes';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

const corsOptions ={
    origin:'*', 
    credentials:false,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use('/', router);
app.listen(process.env.PORT, () => console.log(`Servidor iniciado na porta ${process.env.PORT}!`));