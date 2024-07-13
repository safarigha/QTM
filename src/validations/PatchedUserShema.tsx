import { z } from "zod";
import UserSchema from "./UserShema";

const PatchedUserSchema = z.object({
  id: z.number().int(),
  user: UserSchema,
});

export default PatchedUserSchema;
