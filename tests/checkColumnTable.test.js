/* eslint-disable no-undef */
require('jest');

jest.mock('../helpers/checkColumnTable.js');

const { checkColumnInTable } = require('../helpers/checkColumnTable');
const Authorization = require('../database/models/authorization');
const tokenCreator = require('../helpers/jwtCreator');

describe('checking existing value', () => {
  beforeEach(() => {
    Authorization.findOne = jest.fn((res) => {
      if (!res.where.userId) {
        return Promise.reject(new Error('fail findOne'));
      }
      return Promise.resolve(null);
    });

    Authorization.create = jest.fn((res) => {
      if (!res.userId || !res.token) {
        return Promise.reject(new Error('fail create'));
      }
      return Promise.resolve(true);
    });

    Authorization.update = jest.fn(() => Promise.resolve(true));
  });

  test('should ....', async () => {
    const idUser = 31;
    const tokenUser = tokenCreator(idUser);

    const answer = await checkColumnInTable(idUser, tokenUser);

    expect(answer).toBeTruthy();
  });

  afterEach(() => {
    Authorization.findOne = jest.fn();
    Authorization.create = jest.fn();
    Authorization.update = jest.fn();
  });
});
