import { RadioStation } from "@/types/RadioStation";
import { useState } from "react";

function useRadioStationFilter(stations: RadioStation[]) {
  const [filterValue, setFilterValue] = useState<string>("");

  const filteredStations = stations.filter(
    ({ name, genres }) =>
      name.toLowerCase().includes(filterValue.toLowerCase()) ||
      genres?.some(genre =>
        genre.toLowerCase().includes(filterValue.toLowerCase()),
      ),
  );

  return {
    filteredStations,
    filterValue,
    setFilterValue,
  };
}

export default useRadioStationFilter;
