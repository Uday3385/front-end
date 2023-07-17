'use client';

import DashboardContainer from '@/src/components/Containers/Dashboard';

export default function Layout({ children }: { children: React.ReactNode }) {
    return <DashboardContainer>{children}</DashboardContainer>;
}
