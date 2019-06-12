import parser from './parser';

describe('parser', () => {

  it('should return an array of integers', () => {
    const spy = jest.spyOn(parser, 'parse');

    expect(parser.parse('1\n2,3')).toStrictEqual([1,2,3]);
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });

  it('should return an error', () => {
    const spy = jest.spyOn(parser, 'parse');

    expect(parser.parse('1\n2,,3')).toStrictEqual(['error']);
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
