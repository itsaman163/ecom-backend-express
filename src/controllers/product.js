import ProductSchema from "../models/product.js";

const Product = {
    getAllProdcuts: async (req, res, next) => {
        try {
            let productsListing = await ProductSchema.find({}, {
                image: { $slice: 1 } // Only get the first image
            });
            res.status(200).json({
                setting: { success: "1", massage: "Product data found." },
                data: productsListing
            });
        } catch (err) {
            next(err)
        }
    },
    createProduct: async (req, res, next) => {
        try {
            const req_body = req.body;
            if (typeof req_body.image === 'string') req_body.image = JSON.parse(req_body.image);
            if (typeof req_body.colors === 'string') req_body.colors = JSON.parse(req_body.colors);
            await ProductSchema.create(req_body);
            res.status(200).json({
                setting: { success: "1", massage: "Product created successfully." },
                data: {}
            });
        } catch (error) {
            next(error);
        }
    },
    getProductInfo: async (req, res, next) => {
        try {
            const params = req.params;
            console.log(params);
            const result = await ProductSchema.findOne({ _id: params.id }).select('');
            console.log(result)
            res.status(200).json({
                setting: { success: "1", message: "Product Data found." },
                data: result
            })
        } catch (error) {
            next(error);
        }
    }
}

export default Product;