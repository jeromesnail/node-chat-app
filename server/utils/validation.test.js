const expect = require('expect');

const { isRealString, toTitleCase } = require('./validation');

describe('isRealString', () => {
  it('should return true if valid string', () => {
    const res = isRealString('   tre  ');
    expect(res).toBe(true);
  });

  it('should return false if "empty" string', () => {
    const res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('should return false if invalid string', () => {
    const res = isRealString({ prout: 'this is a string' });
    expect(res).toBe(false);
  });
});


describe('toTitleCase', () => {
  it('should format text correctly', () =>{
    const text = 'title cAse';
    res = toTitleCase(text);
    expect(res).toBe('Title Case');
  });
});