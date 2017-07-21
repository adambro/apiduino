const config = require('config');
const { test } = require('ava');
const request = require('supertest');
require('should');

const { stripTechnicalFields } = require('../../utils/commons');

test('should create Temp record', async () => {
  const tempPayload = {
    temp: 31,
  };
  const response = await request(config.get('application.mountPoint'))
    .post('/temps')
    .send(tempPayload)
    .expect(201);

  stripTechnicalFields(response.body).should.be.eql(tempPayload);
});
