import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/Const/roles';

export const OnlyForRoles = (...roles: Role[]) => SetMetadata('roles', roles);
