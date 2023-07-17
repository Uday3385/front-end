import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { MenuItemType, MenuItemStateType } from '@/src/types';

export interface MenuItemState {
    menuItem?: MenuItemType;
}

const initialState: MenuItemState = {};

export const sidebarMenuSlice = createSlice({
    name: 'sidebarMenu',
    initialState,
    reducers: {
        setSelectedMenuItem: (state, action: PayloadAction<MenuItemStateType>) => {
            state.menuItem = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSelectedMenuItem } = sidebarMenuSlice.actions;

export default sidebarMenuSlice.reducer;
