"use client";
import type { RadioStationDetails } from "@/types/RadioStation";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import AudioPlayer from "./AudioPlayer";
import BadgesList from "./BadgesList";

function RadioStationDetails({ details }: { details: RadioStationDetails }) {
  return (
    <section>
      <div className="block sm:flex gap-4 items-end">
        <div className="p-4">
          <img
            src={details.logo300x300}
            alt={"Logo"}
            className="max-w-48 mx-auto bg-neutral-800 p-4"
          />
        </div>
        <div className="flex-grow p-4">
          <h1 className="text-4xl font-bold mb-4">{details.name}</h1>
          <p>{details.shortDescription}</p>
          <div className="pt-2 flex items-center gap-2">
            <div className="my-2">
              <Link href={details.homepageUrl} passHref target="__blank">
                <LinkIcon />
              </Link>
            </div>
            <BadgesList badges={details.genres} />
          </div>
          <div>
            {details.streams.map(({ url }) => (
              <AudioPlayer key={url} url={url} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-4 p-4">
        <span className="block text-2xl">About</span>
        <p>{details.description}</p>
      </div>
    </section>
  );
}

export default RadioStationDetails;
