import { z } from "zod";
import UserSchema from "./UserShema";

const PatchedProjectMemberSchema = z.object({
  id: z.number().int(),
  user: UserSchema,
});

export default PatchedProjectMemberSchema;
