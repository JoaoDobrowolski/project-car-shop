import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createNewCar(car: ICar) {
    const newCar = new Car(car);
    return newCar;
  }

  public async createCar(car: ICar) {
    const carModel = new CarODM();
    const createCarModel = await carModel.create(car);
    const newCar = this.createNewCar(createCarModel);
    return newCar;
  }
}

export default CarService;