'use client';

import Typography from '@mui/material/Typography';

import { useTheme } from '@/src/theme';
import SelectField from '@/src/components/Inputs/SelectField';
import stylesObj from '../styles';
import styles from '@/src/styles/dashboard/content';

export default function RuleReportBuilder() {
    const theme = useTheme();

    return (
        <div style={styles.root}>
            <div style={styles.content1(stylesObj.wrapper)}></div>
        </div>
    );
}
