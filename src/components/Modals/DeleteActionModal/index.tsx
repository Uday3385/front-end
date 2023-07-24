'use client';

import * as React from 'react';

import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import BootstrapModal, { BootstrapModalActions, BootstrapModalTitle } from '@/src/components/Modals/BootstrapModal';
import { useDeleteModalAction, useSetDeleteModalAction } from '@/src/hooks/useModal';
import styles from './styles';

export default function DeleteActionModal() {
    const { open = false, message, itemTitle = '', title = 'Delete', onConfirm } = useDeleteModalAction(),
        [loading, setLoading] = React.useState(false),
        setDeleteModalAction = useSetDeleteModalAction();

    const handleDeleteAction = async () => {
        if (onConfirm) {
            setLoading(() => true);
            await onConfirm();
            setLoading(false);
        }
    };

    const handleCancelDeleteAction = () => {
        setDeleteModalAction({ open: false });
    };

    return (
        <BootstrapModal open={open} keepMounted={true}>
            <BootstrapModalTitle onClose={handleCancelDeleteAction}>
                <div style={styles.modalTitle}>{title}</div>
            </BootstrapModalTitle>
            <DialogContent style={styles.content} className="deleteDataModalContent">
                <Typography component="h3" style={styles.confirmationText}>
                    {itemTitle ? `Are you sure you want to delete the selected ${itemTitle}?` : message}
                </Typography>
            </DialogContent>

            <BootstrapModalActions>
                <div className="cancelModalAction">
                    <Button onClick={handleCancelDeleteAction} disabled={loading}>
                        Close
                    </Button>
                </div>

                <div className="confirmModalAction">
                    <Button onClick={handleDeleteAction} disabled={loading}>
                        {loading ? 'Deleting...' : 'Confirm'}
                    </Button>
                </div>
            </BootstrapModalActions>
        </BootstrapModal>
    );
}
