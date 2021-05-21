var prototype = {} // for example require('./prototype.json')
var errors = ['Please call initialize() function to set prototype !']

function initialize(seed) {
    // flush errors 
    errors = []
    //check for seed
    if (!Object.keys(seed).length) {
        errors.push("Prototype object can't be empty")
    } else {
        prototype = seed
    }
}

function errorsExists() {
    return errors.length > 0 ? true : false
}

function checkForAnyErrors() {
    if (errorsExists()) {
        throw errors[0]
    }
}

function getActualKeyFromAliases(collectionToBeSearched, aliases) {
    checkForAnyErrors()
    const collection = prototype[collectionToBeSearched]
    for (let document of Object.entries(collection)) {
        if (document[1] == aliases) return document[0]
    }
}

function getAliasesFromKey(collectionToBeSearched, key) {
    checkForAnyErrors()
    const collection = prototype[collectionToBeSearched]
    for (let document of Object.entries(collection)) {
        if (document[0] == key) return document[1]
    }

}

function convertObjectToAliases(collection, object) {
    checkForAnyErrors()
    collection = prototype[collection]
    var temporayObject = {}
    for (var key in object) {
        for (let document of Object.entries(collection)) {
            if (document[0] == key) {
                temporayObject[document[1]] = object[key]
                break;
            }
        }
    }
    return temporayObject
}

function convertObjectToKeys(collection, object) {
    checkForAnyErrors()
    collection = prototype[collection]
    var temporayObject = {}
    for (var key in object) {
        for (let document of Object.entries(collection)) {
            if (document[1] == key) {
                temporayObject[document[0]] = object[key]
                break;
            }
        }
    }
    return temporayObject
}
module.exports.getActualKeyFromAliases = getActualKeyFromAliases
module.exports.getAliasesFromKey = getAliasesFromKey
module.exports.convertObjectToAliases = convertObjectToAliases
module.exports.convertObjectToKeys = convertObjectToKeys
module.exports.initialize = initialize