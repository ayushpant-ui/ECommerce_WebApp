export interface RegisterData{
    firstName: string ;
    lastName : string ;
    email    : string ;
    password : string ;
}

export interface RegisterError{
    firstName? :string;
    lastName? : string ;
    email?   : string ;
    password? : string ;
    confirmPassword? : string ;
}
