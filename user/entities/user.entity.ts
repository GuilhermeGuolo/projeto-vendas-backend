import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'user'})
export class UserEntity  {
    @PrimaryGeneratedColumn()
    id: Number;
  
    @Column({ nullable: false })
    name: String;
  
    @Column({ nullable: false })
    email: String;
  
    @Column()
    phone: String;
  
    @Column({ nullable: false })
    cpf: String;
  
    @Column({ nullable: false })
    password: String;
  
}
