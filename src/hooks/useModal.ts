import { useDispatch, useSelector } from 'react-redux';

import {
    setSuccessModalAction,
    setDeleteModalAction,
    setEditModalAction,
    ModalState,
} from '@/src/redux/reducers/modal';

import { RootState } from '@/src/redux/store';

export const useSuccessModalAction = () => useSelector((state: RootState) => state.modal.successAction);
export const useDeleteModalAction = () => useSelector((state: RootState) => state.modal.deleteAction);
export const useEditModalAction = () => useSelector((state: RootState) => state.modal.editAction);

export const useSetDeleteModalAction = () => {
    const dispatch = useDispatch();

    return (deleteAction: ModalState['deleteAction']) => {
        dispatch(setDeleteModalAction(deleteAction));
    };
};

export const useSetSuccessModalAction = () => {
    const dispatch = useDispatch();

    return (successAction: ModalState['successAction']) => {
        dispatch(setSuccessModalAction(successAction));
    };
};

export const useSetEditModalAction = () => {
    const dispatch = useDispatch();

    return (editAction: ModalState['editAction']) => {
        dispatch(setEditModalAction(editAction));
    };
};
