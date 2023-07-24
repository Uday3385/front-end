import Button from '@mui/material/Button';

import { useSetEditModalAction } from '@/src/hooks/useModal';

export default function CancelEditActionButton({ loading }: { loading: boolean }) {
    const setEditModalAction = useSetEditModalAction();

    const handleCancelEditAction = () => {
        setEditModalAction({ open: false });
    };

    return (
        <div className="cancelModalAction">
            <Button onClick={handleCancelEditAction} disabled={loading}>
                Close
            </Button>
        </div>
    );
}
