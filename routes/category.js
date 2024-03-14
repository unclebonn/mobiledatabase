const express = require("express")
const categoryRouter = express.Router()
const { checkTokenAccess } = require("../authentication-utils/jwt-verfification")
const { createCategory, getAllCategories } = require("../controllers/categories-controller")

categoryRouter
    .route("/create")
    .post(checkTokenAccess, createCategory)
categoryRouter
    .route("/")
    .get(getAllCategories)

exports.categoryRouter = categoryRouter