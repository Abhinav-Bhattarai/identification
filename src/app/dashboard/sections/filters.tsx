"use client";
import { Add, Commit, Error, WatchLater } from "@mui/icons-material";
import React from "react";
import { FilterCard, _FILTERS } from "../components/filterCard";

interface IFILTERCHIPPROPS {
  icon: React.ReactNode;
  type: string;
  value: string;
  index: number;
}

const FilterChip: React.FC<IFILTERCHIPPROPS> = React.memo(
  ({ icon, type, value, index }) => {
    return (
      <div className="flex items-center gap-2 bg-white rounded-sm py-2 px-4 border border-gray-300 text-sm shadow-sm font-medium">
        {icon}
        <p>
          <span>{type}</span> is <span className="font-bold">{value}</span>
        </p>
        {index !== _FILTERS.length - 1 && (
          <span className="text-gray-500 font-semibold">and</span>
        )}
      </div>
    );
  }
);

FilterChip.displayName = "FilterChip";

export default function Filters() {
  const [filters, setFilters] = React.useState(_FILTERS);
  const [currentFilters, setCurrentFilters] = React.useState<string[]>([]);

  const handleReset = () => {
    setCurrentFilters([]);
  };

  const handleStatsChange = (id: string) => {
    const dummy = [...currentFilters];
    console.log(dummy, "current filters");
    dummy.push(id);
    setCurrentFilters(dummy);
  };

  const handleRemoveStats = (id: string) => {
    const dummy = [...currentFilters];
    const index = dummy.findIndex((i) => i === id);
    dummy.splice(index, 1);
    setCurrentFilters(dummy);
  };

  return (
    <div className="bg-[#f6f5f5] rounded-sm p-4 flex items-center gap-2 flex-wrap text-sm mx-4 lg:mx-8">
      {
        filters
          .filter((item) => currentFilters.includes(item.id))
          .map((filter, index) => (
            <FilterChip key={filter.type} {...filter} index={index} />
        ))  
      }
      <div className="flex items-center gap-1 lg:gap-4">
        <FilterCard handleSelection={handleStatsChange} />
        <button
          onClick={handleReset}
          type="button"
          className="p-2 hover:bg-gray-200 rounded-sm ease-in duration-200 text-gray-500 font-semibold"
        >
          <p>Reset</p>
        </button>
      </div>
    </div>
  );
}
