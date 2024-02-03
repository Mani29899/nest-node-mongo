import { Ratings } from "../entities/user.entity";

export class CreateUserDto {
    firstName:string;
    lastName:string;
    email:string;
    clientId?:string|undefined;
    password:string;
    ratings:Ratings;
    age:number;
}
