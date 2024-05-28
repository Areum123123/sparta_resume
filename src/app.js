import express from 'express';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/error-handler.middleware.js';
import UsersRouter from './routers/users.routers.js';
import ResumesRouter from './routers/resumes.router.js';

const app = express();
const PORT = process.env.PORT_NUMBER;

app.use(express.json());
app.use(cookieParser());
app.use('/api', [UsersRouter, ResumesRouter]);

app.use(errorHandler); //error미들웨어

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸습니다!');
});
