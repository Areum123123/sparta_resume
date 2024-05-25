import express from 'express';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/error-handler.middleware.js';
import  UsersRouter  from './routers/users.routers.js'

const app = express();
const PORT =3018;

app.use(express.json());
app.use(cookieParser());
app.use('/api',[UsersRouter])


app.use(errorHandler); //error

app.listen(PORT,()=>{
    console.log(PORT,'포트로 서버가 열렸습니다!')
});












app.use(errorHandler);  //가장밑에 존재

