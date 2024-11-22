export type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
};


export type UserTypeWithoutId = Omit<UserType, "id">;
export type UserTypeWithoutIdName = Omit<UserTypeWithoutId,'name'>;