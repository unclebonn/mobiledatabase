const { Customer } = require("../models/customer")


exports.createCustomer = async (req, res, next) => {
    const customerInfo = req.body
    try{
        const data = await Customer.create(customerInfo);
        if(data){
            res.status(201).json({
                data,
                message: "Create new customer success"
            })
        }
    }catch{
        res.json({
            message:"Fail to create customer"
        })
    }

}


exports.getCustomer = async (req, res, next) => {
    const id = req.params.id
    const data = await Customer.findById(id).exec()

    res.status(200).json({
        data,
        message:"Get customer successs"
    })

    
}