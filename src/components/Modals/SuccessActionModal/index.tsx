'use client';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';

import { useSuccessModalAction, useSetSuccessModalAction } from '@/src/hooks/useModal';
import BootstrapModal, { BootstrapModalTitle } from '../BootstrapModal';
import styles from '@/src/components/Modals/DeleteActionModal/styles';
import { useTheme } from '@/src/theme';

export default function SuccessActionModal() {
    const { open = false, message, title = 'Success' } = useSuccessModalAction(),
        setSuccessModalAction = useSetSuccessModalAction(),
        theme = useTheme();

    const handleCloseModal = () => {
        setSuccessModalAction({ open: false });
    };

    const iconStyle = {
        width: '45px',
        height: '45px',
        backgroundColor: theme.palette.success.light,
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& svg': {
            fontSize: '24px',
            fill: '#fff',
        },
    };

    return (
        <BootstrapModal open={open} keepMounted={true}>
            <BootstrapModalTitle onClose={handleCloseModal}>
                <div style={styles.modalTitle}>{title}</div>
            </BootstrapModalTitle>
            <DialogContent style={styles.content} className="deleteDataModalContent">
                <Typography component="h3" style={styles.confirmationText}>
                    {message}
                </Typography>

                <div style={styles.btnWrapper}>
                    <Typography component="div" sx={iconStyle}>
                        <CheckRoundedIcon />
                    </Typography>
                </div>
            </DialogContent>
        </BootstrapModal>
    );
}
