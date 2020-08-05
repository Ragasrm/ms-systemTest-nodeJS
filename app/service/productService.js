const dao = require('../dao/productDAO')
module.exports = {
    save: async (data)=>{
        return await dao.save(data)
    },

    getAll:async()=>{
        return await dao.getAllProduct()
    },
    updateProduct: async(data, ID) =>{
         return await dao.update(data, ID)
         
    },
    deleteProduct:async(delId)=>{
        return await dao.deleteProduct(delId)
    }

}