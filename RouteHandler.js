const database = require("./DB");

exports.getPaymentInformation = (request, h) => {
    return "getPaymentInformation"
}

exports.getUser = (request, h) => {
    return "getUser"
}

exports.createUser = (request, h) => {
    return "createUser"
}

exports.updateUser = (request, h) => {
    return "updateUser"
}

exports.deleteUser = (request, h) => {
    return "deleteUser"
}

database.startDB().then((db) => {
    console.log(db.address.toString())
}).catch(console.log)