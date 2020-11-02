const dao = require('../dao/userDAO')

module.exports = {
    save: async (data)=> {

      const checkUserAvailability = await dao.checkUserAvailability(data.email);
      console.log('checkUserAvailability=>', checkUserAvailability)
      if (checkUserAvailability.length > 0) {
        return {
          success:false,
          message:'Username already present', 
        }
      } 
      return await dao.save(data)
    },

    authenticate: async (creds) => {     
        const credentials = await dao.findByCredentials(creds);
        console.log('credentialscredentials==>', credentials)
        if (credentials.length > 0) {
          return {
            success:true,
            message:'Successfully LoggedIn',
            username: credentials[0].email
          }
        } 
        return false;
      },
}

   

