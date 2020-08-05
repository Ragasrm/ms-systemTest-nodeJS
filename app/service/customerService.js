const dao = require('../dao/customerDAO')

module.exports = {
    save: async (data)=>{
        return await dao.save(data)
    },

    authenticate: async (creds) => {
        const credentials = await dao.findByCredentials(creds);
        if (credentials.length > 0) {
          return {
            success:true,
            message:'Successfully LoggedIn'
          }
        } 
        return false;
      },
}

   

