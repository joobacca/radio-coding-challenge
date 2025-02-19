"use client";
import React, { useState } from "react";
import { RadioStation } from "../types/RadioStation";
import { Input } from "./ui/input";
import SingleRadioStation from "./RadioStationsListElement";

function RadioStationsList({ stations }: { stations: RadioStation[] }) {
  const [textFilter, setTextFilter] = useState<string>("");

  const filteredStations = stations.filter(({ name }) =>
    name.toLowerCase().includes(textFilter.toLowerCase()),
  );

  return (
    <div>
      <div className="flex my-2">
        <div className="w-64">
          <Input
            value={textFilter}
            onChange={e => setTextFilter(e.target.value)}
            placeholder="Type to search..."
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-5 p-2 sm:p-0">
        {filteredStations.map(el => (
          <SingleRadioStation key={el.id} station={el} />
        ))}
      </div>
    </div>
  );
}

export default RadioStationsList;
