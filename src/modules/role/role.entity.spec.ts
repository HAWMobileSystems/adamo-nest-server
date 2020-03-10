import { RoleEntity } from './role.entity';
import {} from 'jest';

describe('RoleEntity class', () => {
  it('should make a role with no fields', () => {
    const role = new RoleEntity('1', 'user');
    expect(role).toBeTruthy();
    expect(role.id).toBe('1');
    expect(role.roleName).toBe('user');
    expect(role.canRead).toBe(false);
    expect(role.canWrite).toBe(false);
    expect(role.isAdmin).toBe(false);
  });
  it('should make a role with name only', () => {
    const role = new RoleEntity('2', 'admin', true, true, true);
    expect(role).toBeTruthy();
    expect(role.id).toBe('2');
    expect(role.roleName).toBe('admin');
    expect(role.canRead).toBe(true);
    expect(role.canWrite).toBe(true);
    expect(role.isAdmin).toBe(true);
  });
  it('should make a role with name and breed', () => {
    const role = new RoleEntity('3', 'demoUser', true, true, false);
    expect(role).toBeTruthy();
    expect(role.id).toBe('3');
    expect(role.roleName).toBe('demoUser');
    expect(role.canRead).toBe(true);
    expect(role.canWrite).toBe(true);
    expect(role.isAdmin).toBe(false);
  });
//   it('should make a role with name breed and age', () => {
//     const role = new RoleEntity('Test', 'Breed', 4);
//     expect(role).toBeTruthy();
//     expect(role.name).toBe('Test');
//     expect(role.breed).toBe('Breed');
//     expect(role.age).toBe(4);
//     expect(role.id).toBe('');
//   });
//   it('should make a role with name breed age and id', () => {
//     const role = new RoleEntity('Test', 'Breed', 4, 'an id');
//     expect(role).toBeTruthy();
//     expect(role.name).toBe('Test');
//     expect(role.breed).toBe('Breed');
//     expect(role.age).toBe(4);
//     expect(role.id).toBe('an id');
//   });
});