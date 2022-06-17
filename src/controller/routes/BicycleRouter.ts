import { BicycleController } from './../BicycleController';
import express from "express";


export const bicycleRouter = express.Router();

const bicycleController = new BicycleController();

bicycleRouter.get("/getAll", bicycleController.getAllBicycle);
bicycleRouter.get("/getColor", bicycleController.getBicycleByColor);
bicycleRouter.get("/getPrice", bicycleController.getBicycleByPrice);
bicycleRouter.post("/create", bicycleController.createBicycle);
bicycleRouter.post("/changePrice", bicycleController.changePrice);
bicycleRouter.post("/sellBike", bicycleController.sellBike);
