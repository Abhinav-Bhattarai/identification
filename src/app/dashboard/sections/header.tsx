'use client';
import { Loop, PushPin, Search, Visibility, VisibilityOff } from '@mui/icons-material';
import React from 'react';
import DatePicker from '../components/datePicker';
import { LogoButton, SubmitButton } from '../components/buttons';

function DateTimeFilter() {
  return (
    <div className="isolate inline-flex -space-x-px  rounded-md shadow-sm">
      <DatePicker />
      <div className="relative inline-flex items-center px-2 py-1 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
        <Search className="h-4 w-4" fontSize="small" aria-hidden="true" />
      </div>
      <div className="relative inline-flex items-center rounded-r-md px-2 py-1 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
        <span className="sr-only">Next</span>
        <PushPin className="h-4 w-4" fontSize="small" aria-hidden="true" />
      </div>
    </div>
  );
}

function DashboardHeader() {
  const [showFilters, setShowFilters] = React.useState(false);
  return (
    <header className="flex items-center gap-4 justify-between flex-wrap px-4 lg:px-8">
      <div className="flex items-center justify-between gap-2 lg:gap-4">
        <h2 className="font-bold text-xl">Explore</h2>
        <div className="flex flex-row items-center">
          {showFilters ? (
            <button type="button" onClick={() => setShowFilters(false)}>
              <VisibilityOff fontSize="small" sx={{ color: 'gray' }} />
            </button>
          ) : (
            <button type="button" onClick={() => setShowFilters(true)}>
              <Visibility fontSize="small" sx={{ color: 'gray' }} />
            </button>
          )}
          <p className="ml-2 text-gray-500 text-sm">Hide Filters</p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-wrap lg:gap-4">
        <DateTimeFilter />
        <LogoButton logo={<Loop fontSize="small" sx={{ color: 'gray' }} />} />
        <SubmitButton text="Save as view" />
      </div>
    </header>
  );
}

export default DashboardHeader;
