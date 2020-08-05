const db = require('../dbConnection/Connection')
const _customerCollection = 'customer'
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    save: async(data) =>{
        data['_id'] =uuidv4()
        data['createdAt']=moment().format()
        const collection = db.getdb().collection(_customerCollection)
        return await collection.insertOne(data)
   },

   findByCredentials: async ({ username, password }) => {
      
    const collection = db.getdb().collection(_customerCollection);
    return await collection
      .find(
        { email: username, password: password},
        { projection: { _id: 1} }
      )
      .toArray();
  },

}
