export class User {
  id: string;
  email: string;
  name: string;
  role: string;
  [key: string]: string | string[];

  constructor({ id = '', email = '', name  = '', role = '' } = {}) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.role = role;
  }

  get fields() {
    return [
      'id',
      'name',
      'email',
      'role',
    ]
  }
}