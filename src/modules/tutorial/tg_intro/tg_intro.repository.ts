import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Tg_IntroEntity } from './tg_intro.entity';

@EntityRepository(Tg_IntroEntity)
export class Tg_IntroRepository extends Repository<Tg_IntroEntity> {}

// var request = require('request');
// var options = {
//   'method': 'PUT',
//   'url': 'http://localhost:3330/tg_intro/',
//   'headers': {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   form: {
//     'userid': '2c49c756-a64b-4032-946b-31e407f51875',
//     'catName': 'Professional',
//     'tg_intro_is_finished': 'true'
//   }
// };
// request(options, function (error, response) { 
//   if (error) throw new Error(error);
//   console.log(response.body);
// });
