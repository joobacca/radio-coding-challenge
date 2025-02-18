import { radioStationDetailsSchema } from "@/types/RadioStation";
import RadioStationDetails from "./RadioStationDetails";

const getStationDetails = async (id: string) => {
  const request = await fetch(
    `https://prod.radio-api.net/stations/details?stationIds=${id}`,
  );
  const body = await request.json();
  return radioStationDetailsSchema.array().parse(body);
};

export default async function StationDetailsPage({
  params,
}: {
  params: Promise<{ stationId: string }>;
}) {
  const { stationId } = await params;
  const [details] = await getStationDetails(stationId);
  return (
    <div className="max-w-xl lg:max-w-4xl mx-auto pt-16 min-h-screen">
      <RadioStationDetails details={details} />
    </div>
  );
}
