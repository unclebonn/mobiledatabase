const express = require("express");
const { createTransaction } = require("../controllers/transaction-controller");
const { checkTokenAccess } = require("../authentication-utils/jwt-verfification")
const transactionRouter = express.Router()


transactionRouter
    .route("/create")
    .post(checkTokenAccess, createTransaction);


exports.transactionRouter = transactionRouter