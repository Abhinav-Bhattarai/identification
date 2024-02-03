import React from 'react';

import { Box, Drawer, Toolbar } from '@mui/material';

const drawerWidth = 700;

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export default function SidebarR({ children, isOpen, handleClose }: Props) {
  return (
    <Drawer
      variant="temporary"
      open={isOpen}
      anchor="right"
      onClose={handleClose}
      sx={{
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          overflowX: 'hidden',
        },
      }}
    >
      <Box>{children}</Box>
    </Drawer>
  );
}
