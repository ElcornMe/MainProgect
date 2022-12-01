/* eslint-disable no-undef */
require('jest');
const randomString = require('../helpers/randomString');

describe('Testing randomString function to return random string', () => {
  test('should return random string specified length', () => {
    expect(randomString(6)).toHaveLength(6);
  });

  test('should be empty string if we didn\'t pass number to function', () => {
    expect(randomString()).toBe('');
  });

  test('Every function call must be return different string', () => {
    expect(randomString(10)).not.toEqual(randomString(10));
  });
});
