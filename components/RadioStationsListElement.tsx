import { RadioStation } from "@/types/RadioStation";
import Link from "next/link";
import BadgesList from "./BadgesList";

const SingleRadioStation = ({ station }: { station: RadioStation }) => {
  return (
    <Link rel="link" href={`/station/${station.id}`}>
      <div className="p-1">
        {station.logo300x300 && (
          <img src={station.logo300x300} alt={`${station.name} Logo`} />
        )}
        <div className="py-1 px-0.5">
          <p className="font-bold hover:underline text-sm pb-1">{station.name}</p>
          <BadgesList badges={station.genres} />
        </div>
      </div>
    </Link>
  );
};

export default SingleRadioStation;
