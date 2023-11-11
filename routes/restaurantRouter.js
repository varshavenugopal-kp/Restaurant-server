import restaurantController from "../Controllers/restaurantController";

const { Router } = require("express");

const router=Router()
router.get('/',restaurantController.getRest);
router.post('/add',restaurantController.addRest)
router.get('/single/:restId',restaurantController.getSingle)
router.delete('/delete',restaurantController.deleteRest);
router.post('/editData',restaurantController.editRest);
export default router