'use client';

import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { borderColor } from '@/src/theme/colors';
import Image from 'next/image';

interface ButtonProps extends MuiButtonProps {
    iconHeight?: number;
    iconWidth?: number;
    iconUrl?: string;
    margin?: string;
    title: string;
}

export default function DefaultButton({
    title,
    iconUrl,
    margin = '0px 12px 0px 0px',
    iconWidth = 12,
    iconHeight = 12,
    ...props
}: ButtonProps) {
    const buttonStyle = {
            width: 'auto',
            height: '30px',
            borderRadius: '3px',
            backgroundColor: '#fff',
            border: `1px solid ${borderColor.default}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'uppercase' as 'uppercase',
            fontFamily: 'Nunito',
            fontSize: '13px',
            fontWeight: 500,
            color: borderColor.dark,
            margin,
        },
        iconStyle = { marginRight: '8px' };

    return (
        <Button style={buttonStyle} {...props}>
            {iconUrl && <Image src={iconUrl} alt={title} width={iconWidth} height={iconHeight} style={iconStyle} />}
            {title}
        </Button>
    );
}
