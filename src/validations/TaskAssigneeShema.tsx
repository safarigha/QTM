import { z } from "zod";
import UserSchema from "./UserShema";
const TaskAssigneeSchema = z.object({
  id: z
    .number({ required_error: "شناسه الزامی است" })
    .int({ message: "شناسه باید یک عدد صحیح باشد" }),
  user: UserSchema,
});

export default TaskAssigneeSchema;
