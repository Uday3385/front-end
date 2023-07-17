'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CircularLoader from '@/src/components/Loaders/Circular';
import { Theme, useTheme } from '@/src/theme';
import type { SizeType } from '@/src/types';
import styles from './styles';

export type PlainCardType = {
    contentStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    children: React.ReactNode;
    success?: boolean;
    loading?: boolean;
    error?: boolean;
    style?: React.CSSProperties;
    title: string;
    size?: SizeType;
};

export default function PlainCard({
    contentStyle = {},
    titleStyle = {},
    success = false,
    loading = false,
    error = false,
    style = {},
    size = 'large',
    children,
    title,
}: PlainCardType & {}) {
    const theme = useTheme(),
        rootStyles = styles({ size, theme, success, error, style, titleStyle, contentStyle });

    return (
        <Box sx={rootStyles} className="plainCard">
            <Typography component="h4" className="plainCardTitle">
                {title}
            </Typography>
            <Typography component="div" className="plainCardContent">
                {loading ? <CircularLoader size={50} /> : children}
            </Typography>
        </Box>
    );
}
