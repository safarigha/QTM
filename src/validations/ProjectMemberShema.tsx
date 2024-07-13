import { z } from "zod";
import UserSchema from "./UserShema";

const ProjectMemberSchema = z.object({
  id: z.number().int(),
  user: UserSchema,
});

export { ProjectMemberSchema };
