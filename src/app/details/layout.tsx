'use client';

import DashboardLayout from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    // <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    // </AuthGuard>
  );
}
