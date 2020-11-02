const router = require('express').Router()
const service = require('../service/userService')

router.post('/', (req, res) => {
    // 1.get data from user
    const data = req.body 
    // 2.process the data
  
    service
      .save(data)
      .then((data) => {       
        if(data.success){
        res.status(404).send({
          success: false,
          message: data.message
        })
        } else {
          res.status(200).send({
            success: true
          })        
        }        
      })
      .catch((err) => {      
        res.status(500).send({
          success: false,
          message: err.message
        })
      })
  })

  router.post("/authenticate", (req, res) => {
    console.log('req.body==>', req.body)
    service
      .authenticate(req.body)
      .then((data) => {
        if (data.success) {
          res.status(200).send(data);
        } else {
          res.status(401).send({message:'No user found..!'});
        }
      })
      .catch((err) => {
        res.send(err);
      });
  });


  module.exports = router