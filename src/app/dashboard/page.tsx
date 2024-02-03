import React from 'react';
import DashboardHeader from '../dashboard/sections/header';
import Filters from '../dashboard/sections/filters';
import Statbar from '../dashboard/sections/statbar';
import EventTable from '../dashboard/sections/table';
import EventChart from '../dashboard/sections/chart';

const Divider = React.memo(() => <div className="h-[1px] w-full bg-muted" />);
Divider.displayName = 'Divider';

function DashboardOverview() {
  return (
    <main className="w-fill py-4 lg:py-8 space-y-4 lg:space-y-8">
      <DashboardHeader />
      <Filters />
      <Statbar />
      <Divider />
      <EventChart />
      <Divider />
      <EventTable />
    </main>
  );
}

export default DashboardOverview;
