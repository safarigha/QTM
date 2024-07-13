import { z } from "zod";
import UserSchema from "./UserShema";

const PatchedTaskAssigneeSchema = z.object({
  id: z.number().int(),
  user: UserSchema,
});

export default PatchedTaskAssigneeSchema;
