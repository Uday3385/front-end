'use client';

import dynamic from 'next/dynamic';

import { getSubMenuByMenuTitle } from '@/src/hooks/useSidebarMenu';
import DashboardContainer from '@/src/components/Containers/Dashboard';

const ReportSubscribeModal = dynamic(() => import('@/src/components/Modals/ReportSubscribeModal'));

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DashboardContainer contentMenu={getSubMenuByMenuTitle('Reports')}>{children}</DashboardContainer>
            <ReportSubscribeModal />
        </>
    );
}
