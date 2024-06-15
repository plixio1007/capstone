const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/event', eventController.getEventByUser);
router.post('/event', eventController.createEvent);
router.put('/event/:id', eventController.updateEvent);
router.delete('/event/:id', eventController.deleteEvent);

module.exports =router;