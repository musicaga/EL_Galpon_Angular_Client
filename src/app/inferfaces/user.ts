export interface IUser {
  company: string;
  application: string;
  userName?: string;
  token?: string;
  isActive?: boolean;
  role?: string;
  userInformation?: string;
  userConfigurations?: string;
  profileImage?: any;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: any;
  _id?: string;
  applicationRole: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}