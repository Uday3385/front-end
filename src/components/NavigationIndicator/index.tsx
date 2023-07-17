'use client';

import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { useSelectedSidebarMenuItem } from '@/src/hooks/useSidebarMenu';
import styles from './styles.module.css';

export default function NavigationIndicator() {
    const selectedMenuItem = useSelectedSidebarMenuItem(),
        paths = selectedMenuItem?.path?.split('/');

    const renderNavIndicators = paths?.map((item, index) => {
        if (index !== 2) return null;

        let title = selectedMenuItem?.navigationIndicator ? selectedMenuItem.navigationIndicator.title : item;
        if (!selectedMenuItem?.paths) {
            title = selectedMenuItem?.title;
        }
        return (
            <Typography component="span" key={item} className={styles.navigationText}>
                {title}
            </Typography>
        );
    });

    return (
        <div className={styles.navigationIndicator}>
            <Image src="/icons/home-alt.svg" alt="home" width={18} height={18} className={styles.homeIcon} />
            <Typography component="div" className={styles.navigationText}>
                Home
            </Typography>
            <span className={styles.navLine}>/</span>
            {renderNavIndicators}
        </div>
    );
}
