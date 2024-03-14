const { Category } = require("../models/categories");

exports.createCategory = async (req, res, next) => {
    const request = req.body;
    const data = await Category.create(request)

    res.status(201).json({
        data
    })
}

exports.getAllCategories = async (req, res, next) => {
    const data = await Category.find({})
    res.status(200).json({
        data
    })
}