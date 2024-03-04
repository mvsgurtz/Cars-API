import express, { json } from "express";
import { carsRoutes } from "./routes/routes.cars";

export const app =  express();

app.use(json());

app.use("/cars", carsRoutes)