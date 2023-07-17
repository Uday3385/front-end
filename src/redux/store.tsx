import { configureStore } from '@reduxjs/toolkit';

import type { MenuItemStateType, ReportBuilderState } from '@/src/types';
import globalDragDrop, { type GlobalDragDropState } from './reducers/globalDragDrop';
import reportBuilder from './reducers/reportBuilder';
import sidebarMenu from './reducers/sidebarMenu';

export const store = configureStore({
    reducer: { sidebarMenu, globalDragDrop, reportBuilder },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Infer all state values types
export type RootStateValues = {
    globalDragDrop: keyof GlobalDragDropState;
    reportBuilder: keyof ReportBuilderState;
    sidebarMenu: keyof MenuItemStateType;
};
