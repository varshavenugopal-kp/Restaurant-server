const { Router } = require('express');
const restaurantController = require('../Controllers/restaurantController.js');

const router = Router();
router.get('/', restaurantController.getRest);
router.post('/add', restaurantController.addRest);
router.get('/single/:restId', restaurantController.getSingle);
router.patch('/editData', restaurantController.editRest);
router.delete('/delete', restaurantController.deleteRest);

module.exports = router;
