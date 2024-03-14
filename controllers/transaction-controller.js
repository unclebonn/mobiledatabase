const { Transaction } = require("../models/transaction");

exports.createTransaction = async (req, res, next) => {
    const data = await Transaction.create(req.body);

    res.status(201).json({
        data
    })
}

exports.getHistoryTransaction = async (req, res, next) => {
    const data = await Transaction.find();
}