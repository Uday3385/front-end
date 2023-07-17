'use client';

import Button from '@mui/material/Button';

import { useIsSidebarMenuItemActive } from '@/src/hooks/useSidebarMenu';
import { MenuItemType } from '@/src/types';
import { useRouter } from '@/src/hooks/useNavigation';
import { useTheme } from '@/src/theme';
import stylesModule from './styles.module.css';
import RenderText from '@/src/components//RenderText';
import styles from './styles';

export type ContentNavbarType = { menuItems?: MenuItemType[] };

export default function ContentNavbar({ menuItems }: ContentNavbarType) {
    const theme = useTheme(),
        navigate = useRouter(),
        isMenuActive = useIsSidebarMenuItemActive();

        if (!menuItems?.length) return null;

    const handleClick = (menuItem: MenuItemType) => () => {
        navigate(menuItem.path);
    };

    return (
        <div style={styles.buttonWrapper({ theme })}>
            {menuItems?.map((menuItem) => {
                const isActive = isMenuActive(menuItem);

                return (
                    <Button
                        key={menuItem.title}
                        style={styles.button({ theme, isActive })}
                        onClick={handleClick(menuItem)}
                    >
                        <RenderText
                            color={isActive ? theme.palette.primary.main : theme.palette.borderColor.greyDarken}
                            className={stylesModule.buttonText}
                        >
                            {menuItem.title}
                        </RenderText>
                    </Button>
                );
            })}
        </div>
    );
}
