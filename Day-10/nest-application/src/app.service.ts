import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class UserService {
  @Cron('* * * * * *')
  getHello(): string {
    return 'Hello World!';
  }

  private users = [
    {
      id: 1,
      name: 'Aman',
      role: 'Patient',
    },
    {
      id: 2,
      name: 'srujan',
      role: 'Doctor',
    },
    {
      id: 3,
      name: 'srian',
      role: 'Recept',
    },
  ];

  findAll() {
    return this.users;
  }
  /* */
  findall(role?: 'Patient' | 'Recept' | 'Doctor') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
  create(user: { name: string; role: 'Patient' | 'Recept' | 'Doctor' }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(
    id: number,
    updateUser: { name?: string; role?: 'Patient' | 'Recept' | 'Doctor' },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUser };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
