import calc from './calculator';

describe('calculator', () => {
  it('should return sum of arguments', () => {
    const spy = jest.spyOn(calc, 'sum');

    expect(calc.sum([3, 4, 5])).toBe(12);
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });

  it('should return the result of deduction', () => {
    const mocks = [15,3];
    const sut = calc.minus(mocks);

    expect(sut).toEqual(12);
  });

  it('should return the result of multiply', () => {
    const mocks = [5,3];
    const sut = calc.multiply(mocks);

    expect(sut).toEqual(15);
  });
});
