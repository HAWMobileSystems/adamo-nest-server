// import { Test } from '@nestjs/testing';
// import { ModelController } from './model.controller';
// import { ModelService } from './model.service';
// import { ModelEntity } from './model.entity';
// import { ModelRepository } from './model.repository';
// // import { PermissionService } from '../permission/permission.service';
// import { RoleService } from '../role/role.service';
// import { UserService } from '../user/user.service';
// import { PermissionService } from '../permission/permission.service';


// class DeviceServiceMock extends BaseService {
//   async getDevices(group): Promise<any> {
//       return []; 
//   }
// }

// describe('ModelController', () => {
//   let modelController: ModelController;
//   let modelService: ModelService;
//   let modelRepository: ModelRepository;
//   let permissionService: PermissionService;
//   let roleService: RoleService;
//   let userService: UserService;

//   beforeEach(async () => {
//     modelService = new ModelService(modelRepository);
//     modelController = new ModelController(modelService, permissionService, userService);
//     // modelService = new ModelService(modelRepository);
//     // modelController = new ModelController(modelService, permissionService, userService);


//     // const module = await Test.createTestingModule({
//     //     controllers: [ModelController],
//     //     providers: [ModelService],
//     //     }).compile();

//     // modelService = module.get<ModelService>(ModelService);
//     // modelController = module.get<ModelController>(ModelController);
//   });


//   describe('listModels', () => {
//     it('should return an array of ', async () => {
//       const result = ['test'];
//       jest.spyOn(modelService, 'list').mockImplementation(() => Promise.resolve());

//       expect(await modelController.listModels()).toBe(result);
//     // it('should return an array of model', async () => {
      
//       // jest.spyOn(modelService, 'list').mockImplementation(() => Promise.resolve(result));

//       // expect(await modelController.listModels()).toBe(result);
//     });
//   });
// });