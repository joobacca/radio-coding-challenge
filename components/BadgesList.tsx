import { Badge } from "./ui/badge";

function BadgesList({ badges }: { badges?: string[] }) {
  if (!badges || badges.length == 0) return;

  return (
    <div className="text-sm gap-1 flex flex-wrap">
      {badges.slice(0, 3).map(genre => (
        <Badge variant="outline" key={genre}>
          {genre}
        </Badge>
      ))}
    </div>
  );
}

export default BadgesList;
