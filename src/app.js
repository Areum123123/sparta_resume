import express from 'express';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/error-handler.middleware.js';
import UsersRouter from './routers/users.routers.js';
import ResumesRouter from './routers/resumes.router.js';
import { PORT_NUMBER } from './constants/env.constant.js';
import { HTTP_STATUS } from './constants/http-status.constant.js';

const app = express();
const PORT = PORT_NUMBER;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
  // throw new Error('예상치 못한 에러')    //에러핸들러 잘 연결되었나 확인
   return res.status(HTTP_STATUS.OK).send('서버가 실행중')
})

app.use('/api', [UsersRouter, ResumesRouter]);

app.use(errorHandler); //error미들웨어

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸습니다!');
});
