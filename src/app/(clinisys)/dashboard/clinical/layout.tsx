'use client';

import DashboardContainer from '@/src/components/Containers/Dashboard';
import { menuItems } from '@/src/components/SidebarMenu/RenderMenuItems';

export default function Layout({ children }: { children: React.ReactNode }) {
    return <DashboardContainer contentMenu={menuItems[3].subMenu}>{children}</DashboardContainer>;
}
