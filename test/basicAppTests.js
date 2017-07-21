const config = require('config');
const { test } = require('ava');
const request = require('supertest');

test('application should be up and running', async () => {
  await request(config.get('application.mountPoint'))
    .get('/')
    .expect(200);
});
