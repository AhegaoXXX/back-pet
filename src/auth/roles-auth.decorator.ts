import { SetMetadata } from "@nestjs/common";

export const ROLES_KEY = 'rolse';

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles)
