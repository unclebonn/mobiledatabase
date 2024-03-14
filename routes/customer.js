const express = require("express");
const { checkTokenAccess } = require("../authentication-utils/jwt-verfification");
const { createCustomer, getCustomer } = require("../controllers/customer-controller");
const customerRouter = express.Router()


customerRouter
    .route("/:id")
    .get(checkTokenAccess, getCustomer)
customerRouter
    .route("/create")
    .post(createCustomer)


exports.customerRouter = customerRouter