'use client';

import Button from '@mui/material/Button';

import { useIsSidebarMenuItemActive } from '@/src/hooks/useSidebarMenu';
import type { MenuItemType } from '@/src/types';
import { useRouter } from '@/src/hooks/useNavigation';
import { useTheme } from '@/src/theme';
import styleModule from './styles.module.css';
import styles from './styles';

export default function DashboardContentMenu({ menu }: { menu?: MenuItemType[] }) {
    const navigate = useRouter(),
        theme = useTheme(),
        isMenuActive = useIsSidebarMenuItemActive(),
        menuLen = menu?.length || 0,
        lastMenuItemsLen = menuLen - 1;

    // Bail rendering if there are no submenus
    if (!menuLen) return null;

    const handleClick = (menuItem: MenuItemType) => () => {
        navigate(menuItem.path);
    };

    const renderMenu = menu?.map((menuItem, index) => {
        const isActive = isMenuActive(menuItem),
            isFirstButton = index === 0,
            isLastButton = index === lastMenuItemsLen;

        return (
            <Button
                key={menuItem.title}
                className={styleModule.button}
                style={styles.button({ theme, isActive, isFirstButton, isLastButton })}
                onClick={handleClick(menuItem)}
            >
                <span style={styles.menuTitle({ isActive })} className={styleModule.menuTitle}>
                    {menuItem.title}
                </span>
            </Button>
        );
    });

    return <div style={styles.contentMenu({ theme })}>{renderMenu}</div>;
}
