require('dotenv').config()
var linkedStorage = (process.env.MONGODB_URI || 'mongodb://username:D1fficultP%40ssw0rd@localhost:27017/?authSource=admin' )

module.exports = {
    'url' : linkedStorage
}
