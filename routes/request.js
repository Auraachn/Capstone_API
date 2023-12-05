const express = require('express');
const RequestControllers = require('../controllers/request.controllers');

const router = express.Router();

//GET
router.get('/', RequestControllers.getAllRequests);

//CREATE - POST
router.post('/', RequestControllers.createNewRequests);

//UPDATE - PATCH
router.patch('/:identifier_request_customer', RequestControllers.UpdateRequest)

//DELETE - DELETE
router.delete('/:identifier_request_customer', RequestControllers.DeleteRequest)

module.exports = router;