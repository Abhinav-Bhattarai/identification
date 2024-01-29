"use client"
import {
  Loop,
  PushPin,
  Search,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import React from "react";
import DatePicker from "../components/datePicker";


function DashboardHeader() {
  const [showFilters, setShowFilters] = React.useState(false);
  return (
    <header className="flex items-center gap-4 justify-between flex-wrap px-4 lg:px-8">
      <div className="flex items-center justify-between gap-2 lg:gap-4">
        <h2 className="font-bold text-xl">Explore</h2>
        <div className="flex flex-row items-center">
          {showFilters ?
            <button type="button" onClick={() => setShowFilters(false)}>
              <VisibilityOff fontSize="small" sx={{ color: "gray" }} />
            </button>
            :
            <button type="button" onClick={() => setShowFilters(true)}>
              <Visibility fontSize="small" sx={{ color: "gray" }} />
            </button>
          }
          <p className="ml-2 text-gray-500 text-sm">Hide Filters</p>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap lg:gap-4">
        <div
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        >
          <DatePicker />
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <PushPin className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
        <button type="button" className="inline-flex items-center duration-200 ease-in cursor-pointer rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <Loop fontSize="small" sx={{ color: "gray" }} />
        </button>
        <button
          type="button"
          className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save as view
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;
