import express from "express";
import Product from "../controllers/product.js";

const Router = express.Router();

Router.route('/').get(Product.getAllProdcuts).post(Product.createProduct);
Router.route('/:id').get(Product.getProductInfo)

export default Router;