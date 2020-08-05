const db = require('../dbConnection/Connection')
const _productCollection = 'product'
const moment = require('moment');

module.exports = {
    save: async(data) =>{
        data['createdAt']=moment().format()
        const collection = db.getdb().collection(_productCollection)
        return await collection.insertOne(data)
   },

   getAllProduct: async() =>{
    const collection = db.getdb().collection(_productCollection)
    return await collection.find().toArray()
   },

   update: async(data, ID) => {
    data['createdAt']=moment().format()
    const collection = db.getdb().collection(_productCollection);
    return await collection.updateOne(
      { _id: ID },
      {$set: data}
    );
   },

   deleteProduct: async(ID) => {
     console.log(ID)
    const collection = db.getdb().collection(_productCollection);
    return await collection.deleteOne({_id:ID})

   }

   

     

}
