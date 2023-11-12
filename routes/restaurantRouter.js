import { Router } from "express";
import restaurantController from "../Controllers/restaurantController.js";

const router=Router()
router.get('/',restaurantController.getRest)
router.post('/add',restaurantController.addRest);
router.get('/single/:restId',restaurantController.getSingle);
router.post('/editData',restaurantController.editRest);
router.post('/delete',restaurantController.deleteRest);

export default router