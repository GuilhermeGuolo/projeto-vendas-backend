import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class ReturnUserDto extends PartialType(CreateUserDto) {
    id: Number;
    name: String;
    cpf: String;
    phone: String;
    email: String;
    password: String;
    
}
