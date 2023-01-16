import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcyleODM';

class MotorcycleService {
  private createNewMotorcycle(motorcycle: IMotorcycle) {
    const newMotorcycle = new Motorcycle(motorcycle);
    return newMotorcycle;
  }

  public async createMotorcycle(motorcycle: IMotorcycle) {
    const MotorcycleModel = new MotorcycleODM();
    const createMotorcycleModel = await MotorcycleModel.create(motorcycle);
    const newMotorcycle = this.createNewMotorcycle(createMotorcycleModel);
    return newMotorcycle;
  }

  public async getAll() {
    const MotorcycleModel = new MotorcycleODM();
    const createMotorcycleModel = await MotorcycleModel.getAll();
    const allMotorcycles = createMotorcycleModel.map((moto) => this.createNewMotorcycle(moto));
    return allMotorcycles;
  }

  public async getById(id: string) {
    const MotorcycleModel = new MotorcycleODM();
    const createMotorcycleModel = await MotorcycleModel.getById(id);
    if (createMotorcycleModel) {
      const newMotorcycle = this.createNewMotorcycle(createMotorcycleModel);
      return newMotorcycle;
    }
    return createMotorcycleModel;
  }

  public async updateById(id: string, updatedMotorcycle: IMotorcycle) {
    const MotorcycleModel = new MotorcycleODM();
    const createMotorcycleModel = await MotorcycleModel.updateById(id, updatedMotorcycle);
    if (createMotorcycleModel) {
      const newMotorcycle = this.createNewMotorcycle(createMotorcycleModel);
      return newMotorcycle;
    }
    return createMotorcycleModel;
  }
}

export default MotorcycleService;