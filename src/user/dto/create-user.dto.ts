export class CreateUserDto {
    firstName:string;
    lastName:string;
    email:string;
    clientId?:string|undefined;
    password:string;
}
