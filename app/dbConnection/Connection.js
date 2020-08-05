const mongodb = require('mongodb').MongoClient
let connection


module.exports = {
    initConnection: () => {
      return new Promise((resolve, reject) => {
        mongodb.connect('mongodb+srv://raga:raga@cluster0.ngze8.mongodb.net/',
          { useUnifiedTopology: true }, (err, db) => {
            if (err) {
              reject(err)
              // return;
            }
            console.log('Db Started..!')
            connection = db
            resolve()
          })
      })
    },
    getconnection: () => {
      return connection
    },
    getdb: () => {
      return connection.db('SystemTest')
    }
  }