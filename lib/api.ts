import { radioStationSchema, radioStationDetailsSchema } from "@/types/RadioStation";
import { z } from "zod";

const radioApiResponseSchema = z.object({
  playables: z.array(radioStationSchema),
});

export const getTopRadioStations = async () => {
  const response = await fetch(
    "https://prod.radio-api.net/stations/list-by-system-name?systemName=STATIONS_TOP&count=100",
  );
  const body = await response.json();
  const data = await radioApiResponseSchema.parse(body);
  return data.playables;
};

export const getStationDetails = async (id: string) => {
  const request = await fetch(
    `https://prod.radio-api.net/stations/details?stationIds=${id}`,
  );
  const body = await request.json();
  return radioStationDetailsSchema.array().parse(body);
};
