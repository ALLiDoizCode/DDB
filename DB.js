const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')
const uuidv4 = require("uuid/v4")

// optional settings for the ipfs instance
const ipfsOptions = {
    EXPERIMENTAL: {
        pubsub: true
    }
}

var docstore;

exports.startDB = async () => {
    const ipfs = await IPFS.create(ipfsOptions)
    const orbitdb = await OrbitDB.createInstance(ipfs)
    docstore = await orbitdb.docstore('mypayid')
    return new Promise(resolve => {
        resolve(docstore)
    });    
}

exports.joinDB = async (dbAddress) => {
    const ipfs = await IPFS.create(ipfsOptions)
    const orbitdb = await OrbitDB.createInstance(ipfs)
    docstore = await orbitdb.docstore(dbAddress)
    return new Promise(resolve => {
        resolve(docstore)
    });
}

exports.createUser = async (object) => {
    object._id = uuidv4()
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



/*startDB().then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})*/