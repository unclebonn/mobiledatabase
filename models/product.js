const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "This field name is required"],
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
},
    { strict: "throw" }
)

exports.Product = mongoose.model("Product", productSchema)


