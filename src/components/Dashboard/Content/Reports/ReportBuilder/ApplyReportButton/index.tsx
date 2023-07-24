import Box, { type BoxProps as MuiBoxProps } from '@mui/material/Box';

import { useReportDataElementsByDropRegion } from '@/src/hooks/useReportBuilder';
import { useSetSuccessModalAction } from '@/src/hooks/useModal';
import PrimaryButton from '@/src/components/Buttons/PrimaryButton';
import { useTheme } from '@/src/theme';
import styles from './styles';

type BoxProps = MuiBoxProps & {
    isRuleReportBuilderPage?: boolean;
};

export default function ApplyReportButton({ isRuleReportBuilderPage, ...props }: BoxProps) {
    const reportColumnDataElements = useReportDataElementsByDropRegion('columns'),
        reportPromptDataElements = useReportDataElementsByDropRegion('reportPrompts'),
        setSuccessModalAction = useSetSuccessModalAction(),
        theme = useTheme(),
        rootStyle = { ...styles({ theme }), ...(props.sx || {}) },
        disabled = reportColumnDataElements?.length < 1 || reportPromptDataElements.length < 1;

    const handleClick = async () => {
        if (isRuleReportBuilderPage) {
            setSuccessModalAction({
                open: true,
                title: 'Rule Report Builder',
                message: 'Successfully Created New Rule',
            });
            return;
        }
    };

    return (
        <Box {...props} sx={rootStyle}>
            <PrimaryButton margin="0px" className="applyReportBuilderBtn" disabled={disabled} onClick={handleClick}>
                Apply
            </PrimaryButton>
        </Box>
    );
}
