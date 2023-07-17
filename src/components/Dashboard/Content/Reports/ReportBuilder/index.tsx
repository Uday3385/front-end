'use client';

import Box from '@mui/material/Box';

import ReportInputFields from './ReportInputFields';
import { useTheme } from '@/src/theme';
import stylesProps from '@/src/components/Dashboard/Content/Reports/styles';
import styles from '@/src/styles/dashboard/content';
import DragDropElements from './DragDropElements';

export default function ReportBuilder() {
    const theme = useTheme(),
        rootStyle = { ...styles.root, marginBottom: '0px' };

    return (
        <div style={rootStyle}>
            <div style={styles.content1(stylesProps.wrapper)}>
                <ReportInputFields />
                <DragDropElements />
            </div>
        </div>
    );
}
