import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from './routes/user.routes';
import realestateRouter from './routes/realestate.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

mongoose.connect('mongodb://localhost:27017/nekretnine');
const conn = mongoose.connection;

conn.once('open', ()=>{
    console.log('mongo open');
})

const router = express.Router();
router.use('/user', userRouter);
router.use('/realestate', realestateRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));