'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useIsSidebarMenuItemActive } from '@/src/hooks/useSidebarMenu';
import type { SubMenuType } from '@/src/types';
import ToggleMenuIcon from '@/src/components/SidebarMenu/ToggleMenuIcon';
import { useRouter } from '@/src/hooks/useNavigation';
import stylesModule from './styles.module.css';
import { useTheme } from '@/src/theme';
import styles from './styles';

export default function SubMenu({ items, expand = false, isNestedMenu = false }: SubMenuType) {
    const theme = useTheme(),
        navigate = useRouter(),
        isMenuVisible = useIsSidebarMenuItemActive();

    if (!items) return null;

    const filterItems = items.filter((item) => !item.isHidden),
        itemsLen = filterItems.length,
        lastMenuItemIndex = itemsLen - 1;

    const renderMenuItems = filterItems.map((item, index) => {
        const isFirstItem = index === 0,
            isLastItem = index === lastMenuItemIndex,
            subMenu = item.subMenu,
            hasSubMenu = subMenu && subMenu?.length > 0,
            isSubMenuVisible = isMenuVisible(item);

        if (!expand) return null;

        const handleClick = () => {
            navigate(item?.pathAlias || item.path);
        };

        return (
            <React.Fragment key={item.title}>
                <div style={styles.subMenuWrapper}>
                    <div className={stylesModule.lineWrapper}>
                        <span style={styles.line({ theme, isLastItem, isFirstItem, hasSubMenu })}></span>
                        <span
                            style={styles.dot({ theme, isLastItem, isFirstItem, hasSubMenu, isSubMenuVisible })}
                        ></span>
                        {!isLastItem && <span style={styles.line({ theme, isLastItem, isFirstItem })}></span>}
                    </div>

                    <Button
                        className={stylesModule.subMenuItemBtn}
                        style={styles.subMenuItemBtn({ isFirstItem, hasSubMenu })}
                        onClick={handleClick}
                    >
                        <Typography
                            className={stylesModule.subMenuItemTitle}
                            style={styles.subMenuItemTitle({ theme, isNestedMenu })}
                        >
                            {item.title}
                        </Typography>
                        {subMenu ? <ToggleMenuIcon isActive={isSubMenuVisible} /> : null}
                    </Button>
                </div>

                <SubMenu isNestedMenu={true} items={subMenu} expand={isSubMenuVisible} />
            </React.Fragment>
        );
    });

    return <div style={styles.subMenu({ theme, isNestedMenu })}>{renderMenuItems}</div>;
}
