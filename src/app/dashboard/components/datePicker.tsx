'use client';

import * as React from 'react';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { cn } from 'src/utils/utils';
import { Button } from 'src/components/ui/button';
import { Calendar } from 'src/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from 'src/components/ui/popover';

const numberOfDays = (date?: DateRange) => {
  if (date && date.from && date.to) {
    const diffInTime = date.to.getTime() - date.from.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return diffInDays;
  }
  return 0;
};

export default function DatePicker({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              'w-full max-w-[300px] justify-start group text-left font-normal rounded-none shadow-none relative inline-flex items-center rounded-l-md px-2 py-4 text-gray-400 hover:text-gray-400 border-border hover:bg-muted focus:z-20 focus:outline-offset-0',
              !date && 'text-muted-foreground'
            )}
          >
            <span className="px-2 rounded-sm text-[11px] bg-muted group-hover:bg-background mx-2">
              {numberOfDays(date)}d
            </span>
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto z-10 p-0 bg-card" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
