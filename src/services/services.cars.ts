import { CarsList, generateId } from "../database/database";
import { ICar, TCreateCars, TUpdateCars } from "./../interface/interface.cars";

export class CarsServices {
  create(data: TCreateCars) : ICar {
    const date = new Date();
    const newCar = {
      ...data,
      id: generateId(),
      createdAt: date,
      updatedAt: date,
    };
    CarsList.push(newCar);
    return newCar;
  }

  getAll(search?:string, year?:string) : ICar[]
  {
    const filteredCars = CarsList.filter((car) =>{
        const searchRule = search? car.model.toLowerCase().includes(search.toLowerCase()) : true;
        const yearRule = year ? car.year === Number(year) : true;

        return searchRule && yearRule;
    })
    return filteredCars;
  }

  getOne(id: number) {
    const currentCar = CarsList.find((car) => car.id === id);
    if (currentCar) {
      return currentCar;
    } else {
      {
        message: "Car not found";
      }
    }
  }

  update(data: TUpdateCars, id: number) {
    const currentCar = CarsList.find((car) => car.id === id);
    if (currentCar) {
      const date = new Date();
      const index = CarsList.findIndex((car) => car.id === id);
      const updatedCar = {
        ...currentCar,
        ...data,
        updatedAt: date,
      };
      CarsList.splice(index, 1, updatedCar);
      return updatedCar;
    } else {
      {
        message: "Car couldnt be found";
      }
    }
  }

  delete(id: number) {
    const currentCar = CarsList.find((car) => car.id === id);
    if (currentCar) {
      const index = CarsList.findIndex((car) => car.id === id);
      CarsList.splice(index, 1);
      return CarsList;
    } else {
      {
        message: "Car couldnt be found";
      }
    }
  }
}
