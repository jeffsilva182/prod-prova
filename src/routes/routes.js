const express = require('express');
const controller = require ('../controllers/controller.js');
const router = express.Router();
 
router.post('/produtos', controller.Insert);
router.get('/produtos', controller.SelectAll);
router.get('/produtos/:id', controller.SelectDetail);
router.put('/produtos/:id', controller.Update);
router.delete('/produtos/:id', controller.Delete);
 
module.exports = router;
