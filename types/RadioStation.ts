import { z } from "zod";

export const radioStationSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo300x300: z.string().optional(),
  // genres: z.string().array(),
  streams: z.array(
    z.object({
      url: z.string(),
    }),
  ),
});

export type RadioStation = z.infer<typeof radioStationSchema>;
