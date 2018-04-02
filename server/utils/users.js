class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    const removedUser = this.getUser(id);
    this.users = this.users.filter(user => user.id !== id);
    return removedUser;
  }
  getUser(id) {
    return this.users.filter(user => user.id === id)[0];
  }
  getUserByName(name) {
    return this.users.filter(user => user.name === name)[0];
  }
  getUserList(room) {
    return this.users
      .filter(user => user.room === room)
      .map(user => user.name);
  }
}

module.exports = { Users };