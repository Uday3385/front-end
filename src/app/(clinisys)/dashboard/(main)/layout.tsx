'use client';

import { useSelectedSidebarMenuItem } from '@/src/hooks/useSidebarMenu';
import DashboardContainer from '@/src/components/Containers/Dashboard';
import { menuItems } from '@/src/components/SidebarMenu/RenderMenuItems';

export default function Layout({ children }: { children: React.ReactNode }) {
    const selectedMenuItem = useSelectedSidebarMenuItem(),
        mainContent = !selectedMenuItem?.paths?.includes('/dashboard/corporate')
            ? {}
            : {
                  contentNavbar: {
                      menuItems: menuItems[0]?.subMenu ? menuItems[0]?.subMenu?.[0]?.subMenu : undefined,
                  },
              };

    return <DashboardContainer contentMenu={menuItems[0].subMenu} mainContent={mainContent}>{children}</DashboardContainer>;
}
