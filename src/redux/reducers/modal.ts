import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ModalProps = {
    message?: React.ReactNode;
    title?: React.ReactNode;
    open: boolean;
};

export interface ModalState {
    successAction: ModalProps;

    editAction: ModalProps & {
        onConfirm?: () => void;
        isCustom?: boolean;
        content?: React.ReactNode;
        style?: React.CSSProperties;
        data?: any;
        name?: string;
    };

    deleteAction: ModalProps & {
        onConfirm?: () => void;
        itemTitle?: string;
        data?: any;
    };
}

const initialState: ModalState = {
    successAction: { open: false },
    deleteAction: { open: false },
    editAction: { open: false },
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setDeleteModalAction: (state, action: PayloadAction<ModalState['deleteAction']>) => {
            state.deleteAction = action.payload;
        },
        setSuccessModalAction: (state, action: PayloadAction<ModalState['successAction']>) => {
            state.successAction = action.payload;
        },
        setEditModalAction: (state, action: PayloadAction<ModalState['editAction']>) => {
            state.editAction = action.payload;
        },
    },
});

export const { setEditModalAction, setDeleteModalAction, setSuccessModalAction } = modalSlice.actions;

export default modalSlice.reducer;
