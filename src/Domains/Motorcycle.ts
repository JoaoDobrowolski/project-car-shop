import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id: string | undefined; // undefined se os dados não estiverem no banco (Ex: antes do cadastro)
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(car: IMotorcycle) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.category = car.category;
    this.engineCapacity = car.engineCapacity;
  }
}

export default Motorcycle;