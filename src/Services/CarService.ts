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

  public async getAll() {
    const carModel = new CarODM();
    const createCarModel = await carModel.getAll();
    const allCars = createCarModel.map((car) => this.createNewCar(car));
    return allCars;
  }

  public async getById(id: string) {
    const carModel = new CarODM();
    const createCarModel = await carModel.getById(id);
    if (createCarModel) {
      const newCar = this.createNewCar(createCarModel);
      return newCar;
    }
    return createCarModel;
  }
}

export default CarService;