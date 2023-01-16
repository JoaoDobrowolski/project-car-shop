import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import IVehicle from '../Interfaces/IVehicle';

class AbstractODM {
  private schema: Schema; // Atributo para o "molde"
  private model: Model<IVehicle>; // Atributo para criar coleção e fornecer acesso ao banco

  constructor() {
    this.schema = new Schema<IVehicle>({
      // model: { type: String, required: true },
      // year: { type: Number, required: true },
      // color: { type: String, required: true },
      // status: { type: Boolean, required: false },
      // buyValue: { type: Number, required: true },
      // category: { type: String, required: true },
      // engineCapacity: { type: Number, required: true },
    });
    this.model = models.Vehicle || model('Vehicle', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
  }

  // public async create(vehicle: IVehicle): Promise<IVehicle> {
  //   return this.model.create({ ...vehicle });
  // }

  // public async getAll() {
  //   return this.model.find();
  // }

  // public async getById(id:string): Promise<IVehicle | null> {
  //   return this.model.findById(id);
  // }

  // public async updateById(id:string, updatedVehicle: IVehicle): Promise<IVehicle | null> {
  //   return this.model.findByIdAndUpdate(id, updatedVehicle, { new: true });
  // }
}

export default AbstractODM;