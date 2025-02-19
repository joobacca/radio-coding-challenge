import RadioStationsList from "@/components/RadioStationsList";

export const revalidate = 60

export default function Home() {
  return (
    <div className="max-w-xl lg:max-w-4xl mx-auto min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p id="welcome">Welcome to our top 100 radio stations page. Here you can enjoy a vast amount of wonderful radio stations, ranging from 0 to 100.</p>
      <RadioStationsList />
    </div>
  );
}
