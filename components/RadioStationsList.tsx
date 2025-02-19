import React from "react";
import { RadioStation, radioStationSchema } from "../types/RadioStation";
import Link from "next/link";
import { z } from "zod";

const SingleRadioStation = ({ station }: { station: RadioStation }) => {
  return (
    <Link rel="link" href={`/station/${station.id}`}>
      <div className="p-1">
        {station.logo300x300 && (
          <img src={station.logo300x300} alt={`${station.name} Logo`} />
        )}
        <div className="py-1">
          <p className="font-bold hover:underline">{station.name}</p>
        </div>
      </div>
    </Link>
  );
};

const radioApiResponseSchema = z.object({
  playables: z.array(radioStationSchema)
})

const getTopRadioStations = async () => {
  const response = await fetch('https://prod.radio-api.net/stations/list-by-system-name?systemName=STATIONS_TOP&count=100')
  const body = await response.json()
  const data = await radioApiResponseSchema.parse(body);
  return data.playables;
};

async function RadioStationsList() {
  const stations = await getTopRadioStations();

  return (
    <div className="grid grid-cols-3 gap-4 lg:grid-cols-5 p-2">
      {stations.map(el => (
        <SingleRadioStation key={el.id} station={el} />
      ))}
    </div>
  );
}

export default RadioStationsList;
