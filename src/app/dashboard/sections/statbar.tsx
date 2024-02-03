'use client';
import { Close } from '@mui/icons-material';
import React, { useState } from 'react';
import { SearchCard, _STATS } from '../components/searchCard';
import { IconButton } from '@mui/material';

interface ISTATBUTTONPROPS {
  icon: React.ReactNode;
  type: string;
  count: number;
  isSelected: boolean;
  handleChange: () => void;
  id: string;
  removeStats: (id: string) => void;
}

const StatButton: React.FC<ISTATBUTTONPROPS> = React.memo(
  ({ icon, type, count, isSelected, handleChange, removeStats, id }) => {
    icon = React.cloneElement(icon as React.ReactElement, {
      htmlColor: isSelected && 'blue',
    });
    return (
      <>
        <div
          className={`flex items-center gap-2 justify-between rounded-sm px-2 mx-1 hover:bg-[#f6f5f5] cursor-pointer ease-in duration-200 text-sm font-semibold ${
            isSelected ? 'text-black bg-[#f6f5f5] mr-4' : 'text-gray-500'
          }`}
          onClick={handleChange}
        >
          {icon}
          <p>
            {count.toLocaleString('en-us')}&nbsp;{type}s
          </p>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              removeStats(id);
            }}
          >
            <Close fontSize="small" sx={{ color: 'gray' }} />
          </IconButton>
        </div>
        <div className="h-[20px] w-[1px] bg-gray-400"></div>
      </>
    );
  }
);

StatButton.displayName = 'StatButton';

export default function Statbar() {
  const [stats, setStats] = useState(_STATS);
  const [currentSelection, setCurrentSelection] = useState(0);
  const [currentStats, setCurrentStats] = useState<string[]>(['1000']);

  const handleChange = (index: number) => {
    setCurrentSelection(index);
  };

  const handleStatsChange = (id: string) => {
    const dummy = [...currentStats];
    dummy.push(id);
    setCurrentStats(dummy);
  };

  const handleRemoveStats = (id: string) => {
    const dummy = [...currentStats];
    const index = dummy.findIndex((i) => i === id);
    dummy.splice(index, 1);
    setCurrentStats(dummy);
  };

  return (
    <div className="flex items-center flex-wrap text-sm px-4 lg:px-8">
      {stats
        .filter((i) => currentStats.includes(i.id))
        .map((stat, index) => (
          <StatButton
            key={stat.type}
            handleChange={() => handleChange(index)}
            {...stat}
            isSelected={currentSelection === index}
            removeStats={handleRemoveStats}
          />
        ))}
      <SearchCard handleSelection={handleStatsChange} />
    </div>
  );
}
