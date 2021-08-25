export interface User{
  id? : number;
  username : string;
  password : string;
  e_mail   : string;
  nombres?  : string;
  apellidos?: string;
  phonenumber: string;
  created_at? : Date;
  image_profile? : null;
}
