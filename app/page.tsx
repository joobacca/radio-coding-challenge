import { radioStationSchema } from "../types/RadioStation";
import RadioStationsList from "@/components/RadioStationsList";
import { z } from "zod";

const radioApiResponseSchema = z.object({
  playables: z.array(radioStationSchema)
})

const getTopRadioStations = async () => {
  const response = await fetch('https://prod.radio-api.net/stations/list-by-system-name?systemName=STATIONS_TOP&count=100')
  const body = await response.json()
  const data = await radioApiResponseSchema.parse(body);
  return data.playables;
};

export default async function Home() {
  const stations = await getTopRadioStations();
  return (
    <div className="max-w-xl lg:max-w-4xl mx-auto min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <RadioStationsList radioStations={stations} />
    </div>
  );
}
