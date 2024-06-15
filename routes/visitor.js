const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/visitorController');

router.get('/visitor', visitorController.getVisitorByEvent);
router.post('/visitor', visitorController.createVisitor);
router.put('/visitor/:id', visitorController.updateVisitor);
router.delete('/visitor/:id', visitorController.deleteVisitor);

module.exports = router;