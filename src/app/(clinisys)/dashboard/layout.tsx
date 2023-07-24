import dynamic from 'next/dynamic';

import { getDashboardPageTitle, AppName } from '@/src/utils/env';
import { APP_DIMENSIONS } from '@/src/utils/constants';
import SidebarMenu from '@/src/components/SidebarMenu';
import Header from '@/src/components/Header';
import styles from './layout.module.css';

const SuccessActionModal = dynamic(() => import('@/src/components/Modals/SuccessActionModal'));
const DeleteActionModal = dynamic(() => import('@/src/components/Modals/DeleteActionModal'));
const EditActionModal = dynamic(() => import('@/src/components/Modals/EditActionModal'));

export const metadata = {
    title: getDashboardPageTitle('Dashboard'),
    description: `${AppName} App`,
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const contentStyle = {
            marginLeft: APP_DIMENSIONS.sidebar.width,
            minHeight: `calc(100vh - ${APP_DIMENSIONS.header.height})`,
            height: '100%',
        },
        sidebarStyle = { width: APP_DIMENSIONS.sidebar.width },
        dashboardWrapperStyle = { marginTop: APP_DIMENSIONS.header.height, maxWidth: APP_DIMENSIONS.maxWidth };

    return (
        <>
            <div className={styles.dashboardLayout}>
                <Header />
                <div className={styles.dashboardWrapper} style={dashboardWrapperStyle}>
                    <div style={sidebarStyle} className={styles.dashboardSidebar}>
                        <SidebarMenu />
                    </div>
                    <div style={contentStyle} className={styles.dashboardContent}>
                        {children}
                    </div>
                </div>
            </div>

            <SuccessActionModal />
            <DeleteActionModal />
            <EditActionModal />
        </>
    );
}
