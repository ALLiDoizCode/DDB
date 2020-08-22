const database = require("./DB");

exports.getUser = (request, h) => {
    const payID = request.params.payID
    let payload = database.user(payID)
    return payload
}

exports.createUser = (request, h) => {
    const payload = request.payload;
    let result = database.createUser(payload)
    return result
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