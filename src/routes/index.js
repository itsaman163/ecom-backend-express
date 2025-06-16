import express from 'express';
import authRouter from './auth.js';
import productRouter from './product.js';
import authenticationMiddleware from '../middleware/authentication.js';

const Router = express.Router();

Router.use('/auth', authRouter);
Router.use("/product", authenticationMiddleware, productRouter);

export default Router;