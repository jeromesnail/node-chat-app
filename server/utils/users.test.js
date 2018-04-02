const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node course'
    }]
  });

  it('should add new user', () => {
    const user = {
      id: '123',
      name: 'Jérôme',
      room: 'Prout'
    };
    const res = users.addUser(user.id, user.name, user.room);
    expect(res).toEqual(user);
    expect(users.users.length).toBe(4);
    expect(users.users[3]).toEqual(user);
  });

  it('should remove a user by id', () => {
    const id = '2';
    const res = users.removeUser(id);
    expect(res).toEqual({
      id: '2',
      name: 'Jen',
      room: 'React course'
    });
    expect(users.users.length).toBe(2);
  });

  it('should not remove any user if id is invalid', () => {
    const id = '23',
    res = users.removeUser(id);
    expect(users.users.length).toBe(3);
    expect(res).toBe(undefined);
  });

  it('should return a user by id', () => {
    const id = '3';
    const res = users.getUser(id);
    expect(res.name).toBe('Julie');
  });

  it('should return undefined if user id not found by id', () => {
    const id = '5';
    const res = users.getUser(id);
    expect(res).toBe(undefined);
  });
  
  it('should return a user by name', () => {
    const name = 'Jen';
    const res = users.getUserByName(name);
    expect(res.id).toBe('2');
  });

  it('should return undefined if user not found by id', () => {
    const name = 'James';
    const res = users.getUserByName(name);
    expect(res).toBe(undefined);
  });

  it('should list all the user in one room', () =>{
    const room = 'Node course';
    const res = users.getUserList(room);
    expect(res).toEqual(['Mike', 'Julie']);
  });
});