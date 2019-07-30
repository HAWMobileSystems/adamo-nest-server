import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { ModelModule } from './model.module';
import { ModelService } from './model.service';
import { INestApplication } from '@nestjs/common';

describe('Model', () => {
  let app: INestApplication;
  let modelService = { find: () => ['test'] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ModelModule],
    })
      .overrideProvider(ModelService)
      .useValue(modelService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET model`, () => {
    return request(app.getHttpServer())
      .get('/model')
      .expect(200)
      .expect({
        data: modelService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});