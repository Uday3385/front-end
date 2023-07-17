'use client';

import { useSetSidebarMenuByCurrentPage } from '@/src/hooks/useSidebarMenu';
import { APP_DIMENSIONS } from '@/src/utils/constants';
import RenderMenuItems from './RenderMenuItems';
import HelpMenuButton from './HelpMenuButton';
import styles from './styles.module.css';

export default function SidebarMenu() {
    useSetSidebarMenuByCurrentPage();

    const sidebarStyle = {
        width: APP_DIMENSIONS.sidebar.width,
        height: APP_DIMENSIONS.sidebar.height,
    };

    return (
        <div style={sidebarStyle} className={styles.sidebarMenu}>
            <RenderMenuItems />
            <HelpMenuButton />
        </div>
    );
}
