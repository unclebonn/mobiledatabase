const { default: mongoose } = require("mongoose");

const customerSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: {
            validator: function (value) {
                //check regex
                const email = /^\S+@\S+\.\S+$/;
                return email.test(value);
            },
            message: "Email không hợp lệ"
        }

    },
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
},

)

exports.Customer = mongoose.model("Customer", customerSchema)
