const { test } = require('ava');
const request = require('supertest');

test('application should be up and running', async () => {
  await request('localhost:3000')
    .get('/')
    .expect(200);
});
