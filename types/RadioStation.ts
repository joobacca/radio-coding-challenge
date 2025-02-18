import { z } from "zod";

export const radioStationSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo300x300: z.string().optional(),
  genres: z.array(z.string()).optional(),
  streams: z.array(
    z.object({
      url: z.string(),
    }),
  ),
});

export type RadioStation = z.infer<typeof radioStationSchema>;

export const radioStationDetailsSchema = radioStationSchema.extend({
  shortDescription: z.string().optional(),
  description: z.string().optional(),
  enabled: z.boolean(),
  homepageUrl: z.string(),
});

export type RadioStationDetails = z.infer<typeof radioStationDetailsSchema>