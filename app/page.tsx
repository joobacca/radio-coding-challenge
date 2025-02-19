import RadioStationsList from "@/components/RadioStationsList";
import { getTopRadioStations } from "@/lib/api";

export const revalidate = 60

export default async function Home() {
  const stations = await getTopRadioStations();
  
  return (
    <div className="max-w-xl lg:max-w-4xl mx-auto min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p id="welcome" className="p-4 pb-0 mb-0">Welcome to our top 100 radio stations page. Here you can enjoy a vast amount of wonderful radio stations, ranging from 0 to 100.</p>
      <RadioStationsList stations={stations} />
    </div>
  );
}
