import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleODM {
  private schema: Schema; // Atributo para o "molde"
  private model: Model<IMotorcycle>; // Atributo para criar coleção e fornecer acesso ao banco

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycle || model('Motorcycle', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  public async getAll() {
    return this.model.find();
  }

  public async getById(id:string): Promise<IMotorcycle | null> {
    return this.model.findById(id);
  }

  public async updateById(id:string, updatedMotorcycle: IMotorcycle): Promise<IMotorcycle | null> {
    return this.model.findByIdAndUpdate(id, updatedMotorcycle, { new: true });
  }
}

export default MotorcycleODM;