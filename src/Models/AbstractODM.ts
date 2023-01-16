import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>; // Atributo para criar coleção e fornecer acesso ao banco
  protected schema: Schema; // Atributo para o "molde"
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async updateById(_id:string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('Invalid mongo id');

    return this.model.findByIdAndUpdate(
      { _id }, 
      { ...obj } as UpdateQuery<T>, 
      { new: true },
    );
  }
}

export default AbstractODM;