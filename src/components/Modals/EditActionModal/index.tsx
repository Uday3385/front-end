'use client';

import * as React from 'react';

import DialogContent from '@mui/material/DialogContent';

import { useEditModalAction, useSetEditModalAction } from '@/src/hooks/useModal';
import BootstrapModal, { BootstrapModalActions } from '@/src/components/Modals/BootstrapModal';
import ConfirmEditActionButton from '@/src/components/Modals/EditActionModal/ConfirmEditActionButton';
import CancelEditActionButton from '@/src/components/Modals/EditActionModal/CancelEditActionButton';
import EditModalTitle from '@/src/components/Modals/EditActionModal/EditModalTitle';
import styles from '@/src/components/Modals/DeleteActionModal/styles';

export default function EditActionModal() {
    const {
            isCustom = false,
            content = 'content',
            style = {},
            title = 'Edit',
            open = false,
            onConfirm,
        } = useEditModalAction(),
        [loading, setLoading] = React.useState(false),
        setEditModalAction = useSetEditModalAction();

    const handleEditAction = async () => {
        if (onConfirm) {
            setLoading(() => true);
            await onConfirm();
            setLoading(false);
            setEditModalAction({ open: false });
        }
    };

    const modalStyle = {
        ...style,
        maxWidth: style.width || style.maxWidth,
        maxHeight: style.height || style.maxHeight,
        height: style.height,
    };

    return (
        <BootstrapModal open={open && !isCustom} sx={modalStyle} keepMounted={true}>
            <EditModalTitle title={title} />
            <DialogContent style={styles.content} className="editDataModalContent">
                {content}
            </DialogContent>

            <BootstrapModalActions>
                <CancelEditActionButton loading={loading} />

                <ConfirmEditActionButton
                    titleUpdating="Updating..."
                    onConfirm={handleEditAction}
                    loading={loading}
                    title="Update"
                />
            </BootstrapModalActions>
        </BootstrapModal>
    );
}
