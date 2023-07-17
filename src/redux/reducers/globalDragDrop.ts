import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface GlobalDragDropState {
    draggingOverItem?: string;
    isDraggingItem?: boolean;
    effectAllowed?: DataTransfer['effectAllowed'];
    droppedItem?: string;
    canDropItem?: boolean;
    draggedItem?: string;
    contextType?: string;
    dropEffect?: DataTransfer['dropEffect'];
    actionRef?: React.MutableRefObject<any>;
    dragType?: 'text/plain';
}

type ActionType = PayloadAction<GlobalDragDropState>;

const initialState: GlobalDragDropState = {};

export const globalDragDropSlice = createSlice({
    initialState,
    name: 'globalDragDrop',
    reducers: {
        setDraggedItem: (state, action: ActionType) => {
            if (action.payload.isDraggingItem !== undefined) {
                state.isDraggingItem = action.payload.isDraggingItem;
            }

            if (action.payload.draggedItem !== undefined) {
                state.draggedItem = action.payload.draggedItem;
            }

            if (action.payload.canDropItem !== undefined) {
                state.canDropItem = action.payload.canDropItem;
            }

            if (action.payload.draggingOverItem !== undefined) {
                state.draggingOverItem = action.payload.draggingOverItem;
            }

            if (action.payload.droppedItem !== undefined) {
                state.droppedItem = action.payload.droppedItem;
            }
        },
    },
});

export const { setDraggedItem } = globalDragDropSlice.actions;

export default globalDragDropSlice.reducer;
