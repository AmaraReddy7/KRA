import {
  Controller,
  Get,
  Body,
  Param,
  Post,
  Patch,
  Delete,
  Query,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserService } from './app.service';

@Controller('users')
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  /*constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }*/

  constructor(private readonly userService: UserService) {}
  @Get() //get app /users   /queryparams   /user?role = value
  /*findAll() {
    //return [];
    return this.userService.findAll();
  }*/
  async findAll() {
    try {
      const users = this.userService.findAll();
      return users;
    } catch (err) {
      console.error('Error in findall', err.message);
    }

    throw new InternalServerErrorException(
      'Failed to get the users due to internal server ',
    );
  }

  @Get() // query params /user?role = value
  findall(@Query('role') role?: 'Patient' | 'Recept' | 'Doctor') {
    //return [];
    return this.userService.findall(role);
  }
  @Get(':id') //Get  users/:id
  /*findOne(@Param('id') id: string) {
    //return { id };
    return this.userService.findOne(+id);
  }*/
  async findOne(@Param('id') id: string) {
    try {
      const user = this.userService.findOne(+id);
      return user;
    } catch (error) {
      console.error('Error in findOne', error.message);
    }
    throw new InternalServerErrorException(
      'Failed to get the users due to internal server ',
    );
  }

  @Get('interns') //Get users/interns
  findAllInterns() {
    return [];
  }

  @Post() //Post users/
  /* create(
    @Body() user: { name: string; role: 'Patient' | 'Recept' | 'Doctor' },
  ) {
    // return user;
    return this.userService.create(user);
  }*/
  async create(
    @Body() user: { name: string; role: 'Patient' | 'Recept' | 'Doctor' },
  ) {
    try {
      const newuser = this.userService.create(user);
      return newuser;
    } catch (error) {
      console.error('Error in create', error.message);
    }
    throw new InternalServerErrorException(
      'Failed to get the users due to internal server ',
    );
  }
  @Patch(':id') //    users/:id
  /* Update(
    @Param('id') id: string,
    @Body()
    userUpdate: { name?: string; role?: 'Patient' | 'Recept' | 'Doctor' },
  ) {
    // return { id, ...userUpdate };
    return this.userService.update(+id, userUpdate);
  }*/
  async Update(
    @Param('id') id: string,
    @Body()
    userUpdate: { name?: string; role?: 'Patient' | 'Recept' | 'Doctor' },
  ) {
    try {
      const userupdate = this.userService.update(+id, userUpdate);
      return userupdate;
    } catch (error) {
      console.error('Error in Update', error.message);
    }
    throw new InternalServerErrorException(
      'Failed to get the users due to internal server ',
    );
  }

  @Delete(':id')
  /*delete(@Param('id') id: string) {
    // return { id };
    return this.userService.delete(+id);
  }*/
  async delete(@Param('id') id: string) {
    try {
      const userdel = this.userService.delete(+id);
      return userdel;
    } catch (error) {
      console.error('Error in delete', error.message);
    }
    throw new InternalServerErrorException(
      'Failed to get the users due to internal server ',
    );
  }
}
