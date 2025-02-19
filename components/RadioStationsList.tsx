"use client";
import React, { useState } from "react";
import { RadioStation } from "../types/RadioStation";
import { Input } from "./ui/input";
import SingleRadioStation from "./RadioStationsListElement";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import useRadioStationFilter from "./useRadioStationFilter";
import usePagination from "./usePagination";
import { cn } from "@/lib/utils";
import { SelectAmount } from "./SelectAmount";

function RadioStationsList({ stations }: { stations: RadioStation[] }) {
  const { filteredStations, filterValue, setFilterValue } =
    useRadioStationFilter(stations);

  const [amount, setAmount] = useState(10);
  const { currentPage, previous, next, hasNext, hasPrevious } = usePagination(
    stations,
    amount,
  );

  return (
    <div>
      <div className="flex my-2">
        <div className="w-64 p-4">
          <Input
            value={filterValue}
            onChange={e => setFilterValue(e.target.value)}
            placeholder="Type to search..."
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-5 p-2 sm:p-0">
        {filteredStations
          .slice(currentPage * amount, currentPage * amount + amount)
          .map(el => (
            <SingleRadioStation key={el.id} station={el} />
          ))}
      </div>
      <div className="mt-4">
        <div className="absolute w-36">
          <SelectAmount value={amount} setValue={setAmount} />
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem
              className={cn("invisible", hasPrevious && "visible")}
            >
              <PaginationPrevious href="#" onClick={previous} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">{currentPage + 1}</PaginationLink>
            </PaginationItem>
            <PaginationItem className={cn("invisible", hasNext && "visible")}>
              <PaginationNext href="#" onClick={next} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default RadioStationsList;
