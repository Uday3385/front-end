import Button from '@mui/material/Button';

export default function ConfirmEditActionButton({
    titleUpdating,
    onConfirm,
    loading,
    title,
}: {
    titleUpdating: React.ReactNode;
    onConfirm: () => void;
    loading: boolean;
    title: React.ReactNode;
}) {
    return (
        <div className="confirmModalAction">
            <Button onClick={onConfirm} disabled={loading}>
                {loading ? titleUpdating : title}
            </Button>
        </div>
    );
}
