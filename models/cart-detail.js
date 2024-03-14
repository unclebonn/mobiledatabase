const { default: mongoose } = require("mongoose");

const cartDetailSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        require: true
    },
    quantity: {
        type: Number,
        require: true,
        default: 1
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        require: true
    }
},
)


exports.CartDetail = mongoose.model("CartDetail", cartDetailSchema);
