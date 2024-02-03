import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/ui/popover";
import { Add, Commit, Error, WatchLater } from "@mui/icons-material";
import { useEffect, useState } from "react";

export const _FILTERS = [
  {
    id: "100",
    icon: <Commit fontSize="small" />,
    type: "Event",
    subText: "name",
    value: "Registration Attempted",
  },
  {
    id: "101",
    icon: <Error fontSize="small" />,
    type: "Policy Action",
    subText: "policy.action",
    value: "Deny",
  },
  {
    id: "102",
    icon: <WatchLater fontSize="small" />,
    type: "Timezone Offset (UTC)",
    subText: "timezone.offset",
    value: "-12:00~+14:00",
  },
];

interface IProps {
  handleSelection: (id: string) => void;
}

export function FilterCard(props: IProps) {
  const [filters, setFilters] = useState(_FILTERS);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (value.length > 0) {
      const filtered = _FILTERS.filter((filter) => {
        return filter.type.toLowerCase().includes(value.toLowerCase());
      });
      setFilters(filtered);
    } else {
      setFilters(_FILTERS);
    }
  }, [value]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="text-gray-500 p-1 rounded-md border-dotted border-2 border-gray-400 flex items-center font-semibold"
        >
          <Add fontSize="small" sx={{ color: "gray" }} />
          <p className="text-sm">Add filter </p>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-gray-50">
        <div className="grid">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Select Filters</h4>
            <p className="text-sm text-muted-foreground">
              Set the filters for the results.
            </p>
          </div>
          <div className="w-full py-2">
            <Input
              id="width"
              defaultValue=""
              placeholder="Search Filters"
              className="h-8"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="grid">
            {filters.map((filter) => {
              return (
                <div
                  key={filter.id}
                  onClick={() => props.handleSelection(filter.id)}
                  className="flex flex-col ease-in duration-200 hover:bg-gray-50 p-3 rounded-sm cursor-pointer"
                >
                  <Label htmlFor="maxWidth">{filter.type}</Label>
                  <p className="text-sm text-gray-300">{filter.subText}</p>
                </div>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
