'use client';

import * as React from 'react';
import Image from 'next/image';

import Button, { type ButtonProps } from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ArrowRightAltIcon from '@/src/components/Icons/ArrowRightAlt';
import { useTheme } from '@/src/theme';
import styles from './styles';

export type AssistCardType = {
    backgroundColor?: string;
    children?: React.ReactNode;
    button?: ButtonProps;
    iconUrl: string;
    style?: React.CSSProperties;
    title: string;
};

export default function AssistCard({
    style = {},
    button = {},
    children,
    iconUrl,
    title,
    backgroundColor,
}: AssistCardType) {
    const theme = useTheme(),
        rootStyles = styles({ theme, style, backgroundColor });

    return (
        <Box sx={rootStyles} className="assistCard">
            <div className="iconWrapper">
                <Image src={iconUrl} alt={title} width={40} height={40} />
            </div>
            <Typography component="div" className="assistCardContent">
                <Typography component="h4" className="assistCardTitle">
                    {title}
                </Typography>
                <Button className="assistCardBtn" {...button}>
                    {children || 'VIEW ALL'}
                    <ArrowRightAltIcon />
                </Button>
            </Typography>
        </Box>
    );
}
