const { default: mongoose } = require("mongoose");

const trasactionSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        require: true
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        require: true
    },
    totalAmount: {
        type: Number,
        require: true
    }
})
exports.Transaction = mongoose.model("Transaction", trasactionSchema)

