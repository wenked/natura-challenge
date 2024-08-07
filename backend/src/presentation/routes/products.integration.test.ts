/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import { describe, expect, it } from 'vitest';

import app from '../../main/config/app';

describe('Products', () => {
  it('should return 200 with products', async () => {
    await request(app)
      .get('/api/products')
      .send({
        page: 1,
        limit: 10,
        attributes: ['id', 'name', 'price', 'description'],
      })
      .expect(200)
      .then(response => {
        expect(response.body).toHaveProperty('total');
        expect(response.body).toHaveProperty('data');
        expect(response.body).toHaveProperty('pages');
      });
  });
});
