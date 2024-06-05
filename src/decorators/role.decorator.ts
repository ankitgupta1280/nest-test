import { SetMetadata } from "@nestjs/common";
import { ROLES } from "src/roles/constants/constant";

export const Roles = (...roles: ROLES[])=>SetMetadata('requiredRoles', roles)