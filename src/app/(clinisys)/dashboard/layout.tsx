import { APP_DIMENSIONS } from '@/src/utils/constants';
import SidebarMenu from '@/src/components/SidebarMenu';
import Header from '@/src/components/Header';
import styles from './layout.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const contentStyle = {
            marginLeft: APP_DIMENSIONS.sidebar.width,
            minHeight: `calc(100vh - ${APP_DIMENSIONS.header.height})`,
            height: '100%',
        },
        sidebarStyle = { width: APP_DIMENSIONS.sidebar.width },
        dashboardWrapperStyle = { marginTop: APP_DIMENSIONS.header.height, maxWidth: APP_DIMENSIONS.maxWidth };

    return (
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
    );
}
