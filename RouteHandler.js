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
    return database.createUser(payload).then((result) => {
        database.deleteUser(payID)
        return result
    })
    
}

exports.deleteUser = (request, h) => {
    const payID = request.params.payID
    let result = database.deleteUser(payID)
    return result
}

exports.databaseAddress = (request, h) => {
    return database.docstore.address.toString()
}

database.startDB("mypayid").then((db) => {
    console.log(db.address.toString())
}).catch(console.log)