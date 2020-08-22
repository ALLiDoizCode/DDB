const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

// optional settings for the ipfs instance
const ipfsOptions = {
    EXPERIMENTAL: {
        pubsub: true
    }
}

var docstore;

exports.startDB = async (dbName) => {
    const ipfs = await IPFS.create(ipfsOptions)
    const orbitdb = await OrbitDB.createInstance(ipfs)
    docstore = await orbitdb.docstore(dbName)
    docstore.load()
    exports.docstore = docstore
    return new Promise(resolve => {
        resolve(docstore)
    });    
}

exports.joinDB = async (dbAddress) => {
    const ipfs = await IPFS.create(ipfsOptions)
    const orbitdb = await OrbitDB.createInstance(ipfs)
    docstore = await orbitdb.docstore(dbAddress)
    docstore.load()
    exports.docstore = docstore
    return new Promise(resolve => {
        resolve(docstore)
    });
}

exports.createUser = async (object) => {
    object._id = object.payId
    const result = await docstore.put(object)
    return new Promise(resolve => {
        resolve(result)
    });
}

exports.user = async (payID) => {
    const result = await docstore.get(payID)
    return new Promise(resolve => {
        resolve(result)
    });
}

exports.deleteUser = async (payID) => {
    const result = await docstore.del(payID)
    return new Promise(resolve => {
        resolve(result)
    });
}
