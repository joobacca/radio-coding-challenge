import RadioStationsList from "@/app/RadioStationsList";

export const revalidate = 60

export default function Home() {
  return (
    <div className="max-w-xl lg:max-w-4xl mx-auto min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <RadioStationsList />
    </div>
  );
}
