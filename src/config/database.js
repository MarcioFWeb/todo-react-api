const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let connectionString = 'mongodb://localhost/todo'
if ((process.env.MONGO_CONECT) && (process.env.MONGO_CONECT !== '')) {
    connectionString = process.env.MONGO_CONECT
}
console.log(connectionString)
module.exports = mongoose.connect(connectionString)