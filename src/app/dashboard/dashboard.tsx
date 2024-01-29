import React from "react";

import DashboardHeader from "./sections/header";
import Filters from "./sections/filters";
import Statbar from "./sections/statbar";
import EventTable from "./sections/table";
import EventChart from "./sections/chart";

const Divider = React.memo(() => (
  <div className="h-[1px] w-full bg-gray-300" />
));
Divider.displayName = "Divider";

function DashboardOverview() {
  return (
    <main className="max-w-7xl mx-auto py-4 lg:py-8 space-y-4 lg:space-y-8">
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
