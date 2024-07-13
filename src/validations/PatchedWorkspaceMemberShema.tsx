import { z } from "zod";
import UserSchema from "./UserShema";

const PatchedWorkspaceMemberSchema = z.object({
  id: z.number().int(),
  user: UserSchema,
  is_super_access: z.boolean(),
});

export default PatchedWorkspaceMemberSchema;
