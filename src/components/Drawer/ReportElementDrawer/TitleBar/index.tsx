import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useSetEditModalAction } from '@/src/hooks/useModal';
import { DarkTooltip } from '@/src/components/Tooltips/CustomTooltip';

type Props = {
    dataElement: any;
};

export default function TitleBar({ dataElement }: Props) {
    const setDrawerState = useSetEditModalAction();

    const handleCloseDrawer = () => {
        setDrawerState({ open: false });
    };

    return (
        <div className="drawerTitleBar">
            <Typography component="h4" className="dataElementTitle">
                {dataElement?.title}
            </Typography>

            <DarkTooltip title="Close" placement="left">
                <IconButton className="closeDrawerBtn" onClick={handleCloseDrawer}>
                    <CloseRoundedIcon />
                </IconButton>
            </DarkTooltip>
        </div>
    );
}
