import RadioStationDetails from "@/components/RadioStationDetails";
import { getStationDetails } from "@/lib/api";

export default async function StationDetailsPage({
  params,
}: {
  params: Promise<{ stationId: string }>;
}) {
  const { stationId } = await params;
  const [details] = await getStationDetails(stationId);
  return (
    <div className="max-w-xl lg:max-w-4xl mx-auto p-2 sm:pt-16 min-h-screen">
      <RadioStationDetails details={details} />
    </div>
  );
}
