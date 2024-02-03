'use client';

import DashboardLayout from 'src/layouts/dashboard';

export default function HomePage() {
  return (
    // <AuthGuard>
    <DashboardLayout>
      <div>Page</div>
    </DashboardLayout>
    // </AuthGuard>
  );
}
