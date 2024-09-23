import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users: any[] = [
        {
            id: 1,
            name: 'JHON DOE',
            phone: '12345'
        },
        {
            id: 2,
            name: 'JANE DOE',
            phone: '31345'
        }
    ];


    getUsers() {
        return this.users;
    }

    createUser(user: CreateUserDto) {
        // this.users.push(user);
        // return {
        //     ...user,
        //     id: this.users.length + 1,
        // };
        console.log(user);
        this.users.push({
            ...user,
            id:this.users.length+1
        })
        return this.users[this.users.length-1];
    }
}
