import { Router } from "express";
import { CarsControllers } from "../controllers/controllers.cars";

export const carsRoutes = Router();

const carController =  new CarsControllers();

carsRoutes.post("/", carController.create)
carsRoutes.get("/", carController.getAll)
carsRoutes.get("/:id", carController.getOne)
carsRoutes.delete("/:id", carController.delete)
carsRoutes.patch("/:id", carController.update)