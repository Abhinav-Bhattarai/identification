'use client';

import { useState } from 'react';

import { SidebarR } from 'src/components/sidebar-r';
import NodesChart from 'src/components/nodes/nodes.component';

import { OverviewDetailsView } from 'src/sections/details/view';

export default function IdentitiesPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NodesChart handlePress={() => setOpen(true)} />
      <SidebarR isOpen={open} handleClose={() => setOpen(false)}>
        <OverviewDetailsView />
      </SidebarR>
    </>
  );
}
