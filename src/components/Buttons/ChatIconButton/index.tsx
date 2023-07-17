'use client';

import { useTheme } from '@mui/material/styles';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import stylesModule from './styles.module.css';
import ChatIcon from '@/src/components/Icons/Chat';
import styles from './styles';

interface ButtonProps extends IconButtonProps {
    notificationCount?: number;
}

export default function ChatIconButton({ notificationCount, ...props }: ButtonProps) {
    const theme = useTheme(),
        rootStyle = styles({ theme });

    return (
        <IconButton sx={rootStyle} className={stylesModule.chatIconBtn} {...props}>
            <ChatIcon />
            {notificationCount && <span className="chatBubble">{notificationCount}</span>}
        </IconButton>
    );
}
