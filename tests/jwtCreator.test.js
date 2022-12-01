/* eslint-disable no-undef */
require('jest');

const tokenCreator = require('../helpers/jwtCreator');

describe('check jwt creation', () => {
  test('should return different token every time', () => {
    const id = 22;

    const jwtToken = tokenCreator(id);

    expect(jwtToken).not.toEqual(tokenCreator(id));
  });
});
