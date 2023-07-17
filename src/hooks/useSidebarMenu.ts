import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';

import { setSelectedMenuItem as setSelectedMenuItemAction } from '../redux/reducers/sidebarMenu';
import type { MenuItemType, MenuItemStateType } from '@/src/types';
import { menuItems } from '@/src/components/SidebarMenu/RenderMenuItems';
import { RootState } from '@/src/redux/store';

const getMenuItemByPath = (path: string) => {
    let selectedMenuItem: MenuItemType | null = null;

    const traverseSubMenuItems = (subMenu: MenuItemType[]) => {
        if (subMenu) {
            for (const subMenuItem of subMenu) {
                if (subMenuItem.path === path) {
                    selectedMenuItem = subMenuItem;
                    return;
                }
                if (subMenuItem.subMenu) {
                    traverseSubMenuItems(subMenuItem.subMenu);
                }
            }
        }
    };

    const setupSelectedMenuItem = () => {
        for (const menuItem of menuItems) {
            if (menuItem.path === path) {
                selectedMenuItem = menuItem;
                return;
            }

            if (menuItem.subMenu) {
                traverseSubMenuItems(menuItem.subMenu);
            }
        }
    };

    setupSelectedMenuItem();

    if (selectedMenuItem) {
        return selectedMenuItem;
    }

    return null;
};

export const useSelectedSidebarMenuItem = (): MenuItemStateType | undefined => {
    const menuItem = useSelector((state: RootState) => state.sidebarMenu.menuItem);
    return menuItem;
};

export const useIsSidebarMenuItemActive = () => {
    const menuItem = useSelector((state: RootState) => state.sidebarMenu.menuItem);

    return ({ path, paths }: MenuItemType) => {
        const hasPaths = typeof paths !== 'undefined';

        // if (menuItem?.paths && menuItem.path.indexOf(path) > -1) return true;
        if (menuItem?.paths && menuItem.paths.includes(path)) return true;

        if (hasPaths && menuItem?.paths?.length && menuItem.paths?.length < paths?.length) {
            return false;
        }

        return menuItem?.path === path;
    };
};

export const useSetSelectedMenuItem = () => {
    const dispatch = useDispatch();

    return (menuItem: MenuItemType) => {
        let _menuItem = { ...menuItem, icon: undefined };

        if (
            (menuItem.path === '/dashboard' || menuItem.path === '/dashboard/corporate') &&
            menuItems[0]?.subMenu &&
            menuItems[0].subMenu?.[0]?.subMenu
        ) {
            _menuItem = {
                ...menuItems[0].subMenu[0].subMenu[0],
                icon: undefined,
            };
        }

        dispatch(setSelectedMenuItemAction(_menuItem));
    };
};

export const useSetSidebarMenuByCurrentPage = () => {
    const pathname = usePathname(),
        setSelectedMenuItem = useSetSelectedMenuItem();

    React.useEffect(() => {
        if (pathname) {
            const selectedMenuItem = getMenuItemByPath(pathname);
            selectedMenuItem && setSelectedMenuItem(selectedMenuItem);
        }
    }, [pathname]);
};
