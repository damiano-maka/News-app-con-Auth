export interface AuthRequestModel {
    email: string;
    password: string;
  }
  
  export interface AuthResponseModel {
    accessToken: string;
    user: UserModel;
  }
  
  export interface UserModel {
    email: string;
    id: number;
  }
  