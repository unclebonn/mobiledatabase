const { default: mongoose } = require("mongoose");

const trasactionSchema = new mongoose.Schema({
    
    createAt: {
        type: Date,
        default: Date.now()
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

