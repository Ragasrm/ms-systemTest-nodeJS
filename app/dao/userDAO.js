const db = require('../dbConnection/Connection')
const _UserCollection = 'userCollection'
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    save: async(data) =>{
        data['_id'] =uuidv4()
        data['createdAt']=moment().format()
        const collection = db.getdb().collection(_UserCollection)
      
        return await collection.insertOne(data)
   },

   userList: async()=>{
    const collection = db.getdb().collection(_UserCollection);
    return await collection.find({},{projection: {firstName:1,gender:1,email:1,country:1}}).toArray();
   },

   findByCredentials: async ({ username, password }) => {
      
    const collection = db.getdb().collection(_UserCollection);
    return await collection
      .find(
        { email: username, password: password},
        { projection: { _id: 1, email:1 } }
      )
      .toArray();
  },

  checkUserAvailability: async(username) =>{
    const collection = db.getdb().collection(_UserCollection);
    return await collection
    .find(
      { email: username},
      { projection: { _id: 1, email:1 } }
    )
    .toArray();




  }

}
