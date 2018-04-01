const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'Jérôme';
    const text = 'Some message';
    const message = generateMessage(from, text);
    expect(message).toMatchObject({ from, text });
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generate location', () => {
  it('should generate correct location object', () => {
    const from = 'Proutlala';
    const lat = 4.236;
    const long = 9.3215;
    const url = 'https://www.google.com/maps?q=4.236,9.3215';
    const location = generateLocationMessage(from, lat, long);
    expect(location).toMatchObject({ from, url });
    expect(typeof location.createdAt).toBe('number');
  });
});