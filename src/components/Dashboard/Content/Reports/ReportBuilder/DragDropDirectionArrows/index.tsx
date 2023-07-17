import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import IconButton from '@mui/material/IconButton';

export default function DragDropDirectionArrows({ directionType }: { directionType: 'columns' | 'reportPrompts' }) {
    return (
        <div className="dragDropDirection">
            <IconButton className="dragDropRightArrowBtn" disabled={true}>
                <KeyboardDoubleArrowRightOutlinedIcon />
            </IconButton>
            <IconButton className="dragDropLeftArrowBtn" disabled={true}>
                <KeyboardDoubleArrowLeftOutlinedIcon />
            </IconButton>
        </div>
    );
}
