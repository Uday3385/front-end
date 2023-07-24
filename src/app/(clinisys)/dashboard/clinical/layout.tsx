'use client';

import { getSubMenuByMenuTitle } from '@/src/hooks/useSidebarMenu';
import DashboardContainer from '@/src/components/Containers/Dashboard';

export default function Layout({ children }: { children: React.ReactNode }) {
    return <DashboardContainer contentMenu={getSubMenuByMenuTitle('Clinical')}>{children}</DashboardContainer>;
}
