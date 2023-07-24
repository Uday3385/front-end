'use client';

import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { primary } from '@/src/theme/colors';

interface ButtonProps extends MuiButtonProps {
    iconHeight?: number;
    iconWidth?: number;
    iconUrl?: string;
    margin?: string;
    title?: string;
}

export default function PrimaryButton({ margin = '0px 12px 0px 0px', children, ...props }: ButtonProps) {
    const buttonStyle = {
        width: 'auto',
        height: '35px',
        borderRadius: '3px',
        backgroundColor: primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Nunito',
        fontSize: '13px',
        fontWeight: 500,
        color: '#fff',
        margin,
    };

    return (
        <Button style={buttonStyle} {...props}>
            {children}
        </Button>
    );
}
