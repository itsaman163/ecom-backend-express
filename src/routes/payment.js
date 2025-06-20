import express from "express";
import Payment from "../controllers/payment.controller.js";
const Router = express.Router();

Router.post("/create_order", Payment.createOrder);
Router.post("/verify_payment", Payment.verifyPayment);
export default Router;