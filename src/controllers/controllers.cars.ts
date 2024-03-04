import { Request, Response } from "express";
import { CarsServices } from "../services/services.cars";

export class CarsControllers {
  create(req: Request, res: Response): Response {
    const carsService =  new CarsServices();
    const response = carsService.create(req.body);
    
    return res.status(201).json(response);

  }

  getAll(req: Request, res: Response): Response {

    const { search, year } = req.query;
    
    const carsService =  new CarsServices();
    const response = carsService.getAll(search as string, year as string);
    
    return res.status(200).json(response);

  }

  getOne(req: Request, res: Response): Response {
    const carsService =  new CarsServices();
    const response = carsService.getOne(Number(req.params.id));
    
    return res.status(200).json(response);

  }

  update(req: Request, res: Response): Response {
    const carsService =  new CarsServices();
    const response = carsService.update(req.body, Number(req.params.id));

    return res.status(200).json(response);

  }

  delete(req: Request, res: Response): Response {
    const carsService =  new CarsServices();
    const response = carsService.delete(Number(req.params.id));

    return res.status(204).json(response);
  }
}
