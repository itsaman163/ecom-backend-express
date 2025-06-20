import express from 'express';
import authRouter from './auth.js';
import productRouter from './product.js';
import authenticationMiddleware from '../middleware/authentication.js';
import paymentRouter from "./payment.js";

const Router = express.Router();

Router.use('/auth', authRouter);
Router.use("/product", authenticationMiddleware, productRouter);
Router.use("/payment", paymentRouter)

export default Router;