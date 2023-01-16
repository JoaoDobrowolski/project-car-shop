import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Motorcycle tests', function () {
  const inputMock = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30000,
    category: 'Street',
    engineCapacity: 600,
  };

  const outputMock = {
    id: '6348513f34c397abcad040b2',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30000,
    category: 'Street',
    engineCapacity: 600,
  };
  
  it('create motorcycle', async function () {
    // Arrange
    const motorcycleInput: IMotorcycle = inputMock;
    const motorcycleOutput: Motorcycle = new Motorcycle(outputMock);

    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.createMotorcycle(motorcycleInput);

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutput);
    sinon.restore();
  });

  it('find cars', async function () {
    // Arrange
    const motorcycleOutput: Motorcycle = new Motorcycle(outputMock);

    sinon.stub(Model, 'find').resolves([motorcycleOutput]);
    // Act
    const service = new MotorcycleService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal([motorcycleOutput]);
    sinon.restore();
  });

  it('find motorcycle by id', async function () {
    // Arrange
    const motorcycleOutput: Motorcycle = new Motorcycle(outputMock);

    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.getById('6348513f34c397abcad040b2');

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutput);
    sinon.restore();
  });

  it('cannot find motorcycle by id', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves();

    // Act
    const service = new MotorcycleService();
    const result = await service.getById('6348513f34c397abcad040b2');

    // Assert
    expect(result).to.be.deep.equal(undefined);
    sinon.restore();
  });

  it('update motorcycle by id', async function () {
    // Arrange
    const motorcycleInput: IMotorcycle = inputMock;

    const motorcycleOutput: Motorcycle = new Motorcycle(outputMock);

    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.updateById('6348513f34c397abcad040b2', motorcycleInput);

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutput);
    sinon.restore();
  });

  it('cannot update motorcycle by id', async function () {
    // Arrange
    const motorcycleInput: IMotorcycle = inputMock;

    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    // Act
    const service = new MotorcycleService();
    const result = await service.updateById('6348513f34c397abcad040b2', motorcycleInput);

    // Assert
    expect(result).to.be.deep.equal(undefined);
    sinon.restore();
  });
});
