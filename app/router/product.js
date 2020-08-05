const router = require('express').Router()
const service = require('../service/productService')

// post --> save the product
router.post('/', (req, res) => {
    // 1.get data from user
    const data = req.body 
    // 2.process the data
    service
      .save(data)
      .then((data) => {
        res.status(200).send({
          success: true
        })
      })
      .catch((err) => {
        console.log(err.message)
        res.status(500).send({
          success: false,
          message: err.message
        })
      })
  })

  //

  router.get('/', (req, res) => {
    service
      .getAll()
      .then((results) => {
        res.status(200).send(results)
      })
      .catch((err) => {
       
        res.status(500).send({
          success: false,
          message: err.message
        })
      })
     
  })

  router.put("/:id", (req, res) => {
    // 1.get data from user
    const data = req.body;
    const ID = req.params.id;

   
    // 3.process the data
    service
      .updateProduct(data, ID)
      .then(() => {
        res.redirect(303, '/api/v1/product/');
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).send({
          success: false,
          message: err.message,
        });
      });
  });

  router.put("/:id/del", (req, res) => {
    // 1.get data from user
    const delId = req.params.id;
    // 3.process the data

    console.log(delId)
    service
      .deleteProduct(delId)
      .then(() => {
        res.redirect(303, '/api/v1/product/');
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).send({
          success: false,
          message: err.message,
        });
      });
  });

  



  module.exports = router

