import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    colors: {
        type: Array
    },
    image: [{
        url: {
            type: String,
            required: true
        },
        alt: {
            type: String
        }, // optional, for image alt text
        position: {
            type: Number
        } // optional, for sorting if needed
    }],
    description: {
        type: String,
    },
    category: {
        type: String
    },
    featured: {
        type: String
    },
    rating: {
        type: Number
    },
    stars: {
        type: Number
    },
    stock: {
        type: Number
    }
})


export default mongoose.model('Product', ProductSchema);