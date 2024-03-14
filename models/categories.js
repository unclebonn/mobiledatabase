const { default: mongoose } = require("mongoose");

const category = new mongoose.Schema({
    type: {
        type: String,
        require: true
    }
}
)


exports.Category = mongoose.model("Category", category);
