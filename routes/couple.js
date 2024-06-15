const express = require('express');
const router = express.Router();
const coupleController = require('../controllers/coupleController');

router.get('/couples', coupleController.getAllCouples);
router.get('/couples/:id', coupleController.getCoupleById);
router.post('/couples', coupleController.createCouple);
router.put('/couples/:id', coupleController.updateCouple);
router.delete('/couples/:id', coupleController.deleteCouple);

module.exports = router;