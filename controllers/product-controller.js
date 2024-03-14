const { Product } = require("../models/product");

exports.getAllProducts = async (req, res, next) => {
    const data = await Product.find({});
    res.status(200).json({
        data
    })
}

exports.createProduct = async (req, res, next) => {
    const data = await Product.create(req.body)

    res.status(201).json({
        status: "success",
        data
    })
}
exports.getProductById = async (req, res, next) => {
    const id = req.params.id
    const data = await Product.findById(id).exec();

    res.status(200).json({
        data
    })
}

