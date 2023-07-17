'use client';

import { SvgIcon } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import type { MenuItemType } from '@/src/types';
import ToggleMenuIcon from '@/src/components/SidebarMenu/ToggleMenuIcon';
import  { useRouter } from '@/src/hooks/useNavigation';
import buttonStyles from './styles';
import stylesModule from './styles.module.css';
import { useTheme } from '@/src/theme';
import UnionIcon from '@/src/components/Icons/Union';

export default function SidebarButton({
    index,
    menuItem,
    isActive = false,
}: {
    index: number;
    menuItem: MenuItemType;
    isActive?: boolean;
}) {
    const theme = useTheme(),
        navigate = useRouter(),
        styles = buttonStyles({ theme }),
        { title, subMenu } = menuItem,
        Icon = menuItem.icon as typeof SvgIcon,
        hasSubMenu = subMenu && subMenu.length > 0,
        iconProps = { fill: isActive ? theme.palette.primary.main : undefined };

    const handleClick = () => {
        navigate(menuItem?.pathAlias || menuItem.path);
    };

    return (
        <Button style={styles.root({ isFirstMenuItem: index === 0 && !isActive })} onClick={handleClick}>
            <span style={styles.sidebarMenuItemIndicator}>{isActive && <UnionIcon />}</span>
            {/* <span style={styles.sidebarMenuItemIcon}>{icon}</span> */}
            {menuItem.icon && <span style={styles.sidebarMenuItemIcon}>{<Icon {...iconProps} />}</span>}
            <Typography style={styles.sidebarMenuItemTitle} className={stylesModule.sidebarMenuItemTitle}>
                {title}
            </Typography>

            {hasSubMenu && <ToggleMenuIcon isActive={isActive} />}
        </Button>
    );
}
