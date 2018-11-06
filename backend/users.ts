export class User {

  constructor(public email: string,
              public name: string,
              private password: string) {}

  matches(another: User): boolean {
    return another !== undefined &&
      another.email === this.email &&
      another.password === this.password
  }
}


export const users: {[ key: string ]: User } = {
  'lironnick@gmail.com': new User('lironnick@gmail.com', 'tiago', '123'),
  'sabrina@gmail.com': new User('sabrina@gmail.com', 'sabrina', '1234')
}
