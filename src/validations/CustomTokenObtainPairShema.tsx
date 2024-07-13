import { z } from "zod";

const CustomTokenObtainPairSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default CustomTokenObtainPairSchema;
