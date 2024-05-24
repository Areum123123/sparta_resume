import express from 'express';
import {prisma} from './utils/prisma.util.js'; //사용처.. 확인
import { errorHandler } from './middlewares/error-handler.middleware';











app.use(errorHandler);  //가장밑에 존재

