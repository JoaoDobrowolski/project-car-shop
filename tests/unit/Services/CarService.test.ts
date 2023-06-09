import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Car tests', function () {
  const inputMock = {
    model: 'Gol',
    year: 2008,
    color: 'white',
    status: true,
    buyValue: 20000,
    doorsQty: 4,
    seatsQty: 5,
  };

  const outputMock = {
    id: '63c1e8b47cb32146dbb4c3e8',
    model: 'Gol',
    year: 2008,
    color: 'white',
    status: true,
    buyValue: 20000,
    doorsQty: 4,
    seatsQty: 5,
  };
  
  it('create car', async function () {
    // Arrange
    const carInput: ICar = inputMock;
    const carOutput: Car = new Car({
      id: '63c1e8b47cb32146dbb4c3e8',
      model: 'Gol',
      year: 2008,
      color: 'white',
      status: true,
      buyValue: 20000,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.createCar(carInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);
    sinon.restore();
  });

  it('find cars', async function () {
    // Arrange
    const carOutput: Car = new Car(outputMock);

    sinon.stub(Model, 'find').resolves([carOutput]);
    // Act
    const service = new CarService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal([carOutput]);
    sinon.restore();
  });

  it('find car by id', async function () {
    // Arrange
    const carOutput: Car = new Car(outputMock);

    sinon.stub(Model, 'findById').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.getById('63c1e8b47cb32146dbb4c3e8');

    // Assert
    expect(result).to.be.deep.equal(carOutput);
    sinon.restore();
  });

  it('cannot find car by id', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves();

    // Act
    const service = new CarService();
    const result = await service.getById('63c1e8b47cb32146dbb4c3e8');

    // Assert
    expect(result).to.be.deep.equal(undefined);
    sinon.restore();
  });

  it('update car by id', async function () {
    // Arrange
    const carInput: ICar = inputMock;

    const carOutput: Car = new Car(outputMock);

    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.updateById('63c1e8b47cb32146dbb4c3e8', carInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);
    sinon.restore();
  });

  it('cannot update car by id', async function () {
    // Arrange
    const carInput: ICar = inputMock;

    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    // Act
    const service = new CarService();
    const result = await service.updateById('63c1e8b47cb32146dbb4c3e8', carInput);

    // Assert
    expect(result).to.be.deep.equal(undefined);
    sinon.restore();
  });
});
