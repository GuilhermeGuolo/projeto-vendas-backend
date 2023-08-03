import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { ReturnUserDto } from './dto/return-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

  private users: UserEntity[] = [];

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds );
    
    const user: UserEntity = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHashed,
    }
    
    this.users.push(user);

    return user;
  }

  async getAllUsers() {
    /*return {
      ...ReturnUserDto
    };*/

    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: ReturnUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
