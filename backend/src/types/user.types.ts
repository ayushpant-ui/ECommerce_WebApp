export interface CreateUserDTO {
    firstName : string;
    lastName : string ;
    email : string ;
    password : string ;
    phone : string ;
}; 

export interface User {
    id : number ;
    firstName : string ;
    lastName : string ;
    email : string ;
    password : string;
    phone : string ;
}