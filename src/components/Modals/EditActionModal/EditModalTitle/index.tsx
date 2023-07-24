import { useSetEditModalAction } from '@/src/hooks/useModal';
import { BootstrapModalTitle } from '@/src/components/Modals/BootstrapModal';
import styles from '@/src/components/Modals/DeleteActionModal/styles';

export default function EditModalTitle({ title }: { title: React.ReactNode }) {
    const setEditModalAction = useSetEditModalAction();

    const handleClose = () => {
        setEditModalAction({ open: false });
    };

    return (
        <BootstrapModalTitle onClose={handleClose}>
            <div style={styles.modalTitle}>{title}</div>
        </BootstrapModalTitle>
    );
}
