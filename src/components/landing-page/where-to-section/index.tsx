import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Hotel, LucideIcon, Search } from "lucide-react";

type DetailsType = {
  icon: LucideIcon | null;
  tag: string;
};

const details: DetailsType[] = [
  {
    icon: Search,
    tag: "Search All",
  },
  {
    icon: Hotel,
    tag: "Hotels",
  },
  {
    icon: null,
    tag: "Things to do",
  },
  {
    icon: null,
    tag: "Restaurant",
  },
  {
    icon: null,
    tag: "Flights",
  },
  {
    icon: null,
    tag: "Holiday Rentals",
  },
];

const WhereTo = () => {
  return (
    <div className="screen-max-width flex flex-col pt-20 items-center px-4">
      <h2 className="text-4xl font-semibold">Where To</h2>
      <div className="overflow-x-auto w-full">
        <div className="flex items-center w-fit lg:w-full justify-between gap-20 lg:gap-0 mt-8">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <div key={detail.tag} className="flex gap-2 items-center">
                {Icon && <Icon className="text-muted-500" />}{" "}
                <p className="whitespace-nowrap">{detail.tag}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex h-16 mt-6 w-full gap-2 items-center rounded-md border border-input bg-background px-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50">
        <Search className="text-muted-200 text-lg" />
        <Input
          className="h-full border-none outline-none px-0 focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="Place to go, things to do, Restaurant"
        />
        <Button className="rounded-3xl">Search</Button>
      </div>
    </div>
  );
};

export default WhereTo;
