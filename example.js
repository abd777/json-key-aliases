// imports 
var prototype = require('./prototype.json')
const {
    initialize,
    getActualKeyFromAliases,
    getAliasesFromKey,
    convertObjectToAliases,
    convertObjectToKeys
} = require('./index')
initialize(prototype)
const testObject = {
    name: 'test object',
    id: 'test123',
    slug: 'test-object'
}
//declaring collections to be used
const collection = 'testCollection'
const Key = getActualKeyFromAliases(collection, 'i')
const Aliases = getAliasesFromKey(collection, 'id')
const convertedObject = convertObjectToAliases(collection, testObject)
const convertedObjectToKeys = convertObjectToKeys(collection, convertedObject)
console.log("getActualKeyFromAliases => ", Key);
console.log("getAliasesFromKey => ", Aliases);
console.log("convertObjectToAliases => ", convertedObject);
console.log("convertObjectToKeys => ", convertedObjectToKeys);