const database = require("./DB");

exports.getPaymentInformation = (request, h) => {
    const name = request.params.name
    return name
}

exports.getUser = (request, h) => {
    const payID = request.params.payID
    return payID
}

exports.createUser = (request, h) => {
    const payload = request.payload;
    return payload
}

exports.updateUser = (request, h) => {
    const payID = request.params.payID
    const payload = request.payload;
    return {"payID":payID,"payload":payload}
}

exports.deleteUser = (request, h) => {
    const payID = request.params.payID
    return payID
}

database.startDB("mypayid").then((db) => {
    console.log(db.address.toString())
}).catch(console.log)