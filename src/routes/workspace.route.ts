import {Router} from "express";
import {
    changeWorkspaceMemberRoleController,
    createWorkspaceController, deleteWorkspaceIdByController,
    getAllWorkspacesUserIsMemberController, getWorkspaceAnalyticsController,
    getWorkspaceByIdController, getWorkspaceMembersController, updateWorkspaceIdByController
} from "../controllers/workspace.controller";

const workspaceRoutes = Router();

workspaceRoutes.post("/create/new", createWorkspaceController);

workspaceRoutes.put("/update/:id", updateWorkspaceIdByController);

workspaceRoutes.put("/change/member/role/:id", changeWorkspaceMemberRoleController);

workspaceRoutes.delete("/delete/:id", deleteWorkspaceIdByController);

workspaceRoutes.get("/all", getAllWorkspacesUserIsMemberController);

workspaceRoutes.get("/members/:id", getWorkspaceMembersController);

workspaceRoutes.get("/analytics/:id", getWorkspaceAnalyticsController);

workspaceRoutes.get("/:id", getWorkspaceByIdController);

export default workspaceRoutes