const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})


exports.Cart = mongoose.model("Cart", cartSchema)

