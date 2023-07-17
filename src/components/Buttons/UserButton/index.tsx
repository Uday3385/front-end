'use client';

import Button, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import ArrowDownIcon from '@/src/components/Icons/ArrowDown';
import stylesModule from './styles.module.css';
import { primary } from '@/src/theme/colors';
import UserIcon from '@/src/components/Icons/User';

interface ButtonProps extends MuiButtonProps {
    url?: string;
}

export default function UserButton({ url, ...props }: ButtonProps) {
    const buttonStyle = {
        width: '36px',
        height: '36px',
        borderRadius: '100%',
        border: `1px solid ${primary.main}`,
        marginRight: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <Button className={stylesModule.userIconBtn} {...props}>
            <span style={buttonStyle}>
                <UserIcon url={url} />
            </span>
            <ArrowDownIcon />
        </Button>
    );
}
