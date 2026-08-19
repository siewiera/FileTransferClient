import { UserRole } from "./enums/user-role";

export interface UserSession 
{
    id: string;
    createdAt: string;
    lastAction: string,
    expires: string,
    username: string,
    userRole: UserRole
}
