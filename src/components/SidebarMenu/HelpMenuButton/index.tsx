'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import HelpIcon from '@/src/components/Icons/Help';
import { useTheme } from '@/src/theme';
import styles from './styles.module.css';

export default function HelpMenuButton() {
    const theme = useTheme(),
        buttonStyle = {
            color: theme.palette.secondary.main,
            backgroundColor: '#FAFAFA',
            borderRadius: '0px',
            width: '100%',
            height: '60px',
            padding: '0px 18px',
            display: 'flex',
            alignItems: 'center',
            bottom: 0,
        };

    return (
        <Button style={buttonStyle} className={styles.button}>
            <span className={styles.helpTextWrapper}>
                <HelpIcon />
                <Typography className={styles.helpText} component="span">
                    Support
                </Typography>
            </span>
        </Button>
    );
}
