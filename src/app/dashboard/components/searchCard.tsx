"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Commit,
  Error,
  MoreVert,
  Person,
  Smartphone,
  WatchLater,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

export const _STATS = [
  {
    id: "1000",
    icon: <Commit fontSize="small" />,
    type: "Event",
    count: 1242,
  },
  {
    id: "1001",
    icon: <Smartphone fontSize="small" />,
    type: "Device",
    count: 4,
  },
  {
    id: "1002",
    icon: <Person fontSize="small" />,
    type: "User",
    count: 12305,
  },
];

interface IProps {
  handleSelection: (id: string) => void;
}

export function SearchCard(props: IProps) {
  const [stats, setStats] = useState(_STATS);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (value.length > 0) {
      const filtered = stats.filter((filter) => {
        return filter.type.toLowerCase().includes(value.toLowerCase());
      });
      setStats(filtered);
    } else {
      setStats(_STATS);
    }
  }, [value]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex duration-200 p-2 mx-2 ease-in cursor-pointer rounded-md hover:bg-gray-100 text-sm items-center justify-center font-semibold text-gray-500">
          <MoreVert fontSize="small" sx={{ color: "gray" }} />
          <span>More</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Select Filters</h4>
          </div>
          <div className="w-full my-2 py-2">
            <Input
              id="width"
              defaultValue=""
              placeholder="Search Criterias"
              className="h-8"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="grid">
            {stats.map((st) => {
              return (
                <div
                  key={st.id}
                  onClick={() => props.handleSelection(st.id)}
                  className="flex items-center space-x-2 ease-in duration-200 hover:bg-gray-50 p-3 rounded-sm cursor-pointer"
                >
                  {st.icon}
                  <Label htmlFor="maxWidth">{st.type}</Label>
                </div>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
