const express = require("express");
const { createTransaction, getHistoryTransaction, getHistoryTransactionDetail } = require("../controllers/transaction-controller");
const { checkTokenAccess } = require("../authentication-utils/jwt-verfification")
const transactionRouter = express.Router()


transactionRouter
    .route("/create")
    .post(checkTokenAccess, createTransaction);


transactionRouter
    .route("/history-transaction/:id")
    .get(checkTokenAccess, getHistoryTransaction)

transactionRouter
    .route("/history-transaction/detail/:id")
    .get(checkTokenAccess, getHistoryTransactionDetail)


exports.transactionRouter = transactionRouter