import { z } from "zod";
import UserSchema from "./UserShema";

const WorkspaceMemberSchema = z.object({
  id: z
    .number({ required_error: "شناسه الزامی است" })
    .int({ message: "شناسه باید یک عدد صحیح باشد" }),
  user: UserSchema,
  is_super_access: z.boolean({
    required_error: "مشخص کردن وضعیت مدیر کل الزامی است",
  }),
});

export default WorkspaceMemberSchema;
