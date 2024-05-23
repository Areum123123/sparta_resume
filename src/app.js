import express from 'express';
import { errorHandler } from './middlewares/error-handler.middleware';











app.use(errorHandler);  //가장밑에 존재

