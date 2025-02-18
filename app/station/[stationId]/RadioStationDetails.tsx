import { Badge } from "@/components/ui/badge";
import type { RadioStationDetails } from "@/types/RadioStation";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function RadioStationDetails({ details }: { details: RadioStationDetails }) {
  return (
    <>
      <section>
        <div className="flex gap-4">
          <div className="bg-neutral-800 p-4">
            <img src={details.logo300x300} alt={"Logo"} className="max-w-48" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{details.name}</h1>
            <p>{details.shortDescription}</p>
            <div className="text-sm gap-1 my-4 flex flex-wrap">
              {details.genres?.slice(0, 3).map(genre => (
                <Badge variant="outline" key={genre}>
                  {genre}
                </Badge>
              ))}
            </div>
            <Link href={details.homepageUrl} passHref target="__blank">
              <LinkIcon />
            </Link>
          </div>
        </div>
        <div className="p-4"></div>
      </section>
    </>
  );
}

export default RadioStationDetails;
