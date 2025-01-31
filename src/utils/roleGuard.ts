import {RolePermissions} from "./role-permissions";
import {PermissionType} from "../enum/role.enum";
import {UnauthorizedException} from "./appError";

export const roleGuard = (
    role: keyof typeof RolePermissions,
    requiredPermissions: PermissionType[]
) => {
    const Permissions = RolePermissions[role];

    const hasPermissions = requiredPermissions.every((permission) =>
        permission.includes(permission)
    );

    if(!hasPermissions) {
        throw new UnauthorizedException(
            "You do not have the necessary permissions to perform this action"
        )
    }
}