import { RadioStation } from "@/types/RadioStation";
import Link from "next/link";

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

export default SingleRadioStation