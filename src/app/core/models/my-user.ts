import { UserRole } from "./enums/user-role";

export interface MyUser 
{
    id: string,
    username: string,
    userRole: UserRole,
    createdAt: string,
    blocked: boolean,
    active: boolean,
    email: string
}
