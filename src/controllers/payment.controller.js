import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: "rzp_test_rrbBJWaXQwSIcU",
    key_secret: "IzP8ULTyzkR3F28L2iqR0WNQ"
});

const Payment = {
    createOrder: async (req, res, next) => {
        try {
            const req_body = req.body;
            const amount = req_body.amount;
            const options = {
                amount: amount * 100, // amount in paise
                currency: "INR",
                receipt: `demo_receipt_${Date.now()}`,
            };
            const order = await razorpay.orders.create(options);
            res.json(order);
        } catch (error) {
            next(error);
        }
    },
    verifyPayment: async (req, res, next) => {
        try {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
            const generatedSignature = crypto
                .createHmac("sha256", "IzP8ULTyzkR3F28L2iqR0WNQ")
                .update(razorpay_order_id + "|" + razorpay_payment_id)
                .digest("hex");

            if (generatedSignature === razorpay_signature) {
                res.json({ status: "success" });
            }
        } catch (error) {
            next(error);
        }
    }
}
export default Payment;