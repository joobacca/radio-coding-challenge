import React, { PropsWithChildren } from "react";
import { RadioStation } from "../types/RadioStation";
import Link from "next/link";

const SingleRadioStation = ({ station }: { station: RadioStation }) => {
  return (
    <Link href={`/station/${station.id}`}>
      <div className="p-1">
        {station.logo300x300 && (
          <img src={station.logo300x300} alt={`${station.name} Logo`} />
        )}
        <div>
          <p className="font-bold">{station.name}</p>
          <p className="text-sm"></p>
        </div>
      </div>
    </Link>
  );
};

function RadioStationsList({
  radioStations,
}: PropsWithChildren<{ radioStations: RadioStation[] }>) {
  return (
    <div className="grid grid-cols-3 gap-4 lg:grid-cols-6 p-2">
      {radioStations.map(el => (
        <SingleRadioStation key={el.id} station={el} />
      ))}
    </div>
  );
}

export default RadioStationsList;
