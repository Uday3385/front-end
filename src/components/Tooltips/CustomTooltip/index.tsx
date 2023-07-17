import * as React from 'react';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import type { TooltipType } from '@/src/types';

type CustomTooltipProps = TooltipProps & {
    maxWidth?: number;
};

const MuiLightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
        zIndex: 99999,
    },
}));

const MuiBootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

const MuiHtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export const LightTooltip = ({ children, ...props }: CustomTooltipProps) => {
    return <MuiLightTooltip {...props}>{children}</MuiLightTooltip>;
};

export const DarkTooltip = ({ children, ...props }: CustomTooltipProps) => {
    return <MuiBootstrapTooltip {...props}>{children}</MuiBootstrapTooltip>;
};

export const HtmlTooltip = ({ children, ...props }: CustomTooltipProps) => {
    return <MuiHtmlTooltip {...props}>{children}</MuiHtmlTooltip>;
};

export const CustomTooltip = ({ type, children, ...props }: TooltipProps & { type: TooltipType }) => {
    switch (type) {
        case 'dark':
            return <DarkTooltip {...props}>{children}</DarkTooltip>;
        case 'light':
            return <LightTooltip {...props}>{children}</LightTooltip>;
        case 'html':
            return <HtmlTooltip {...props}>{children}</HtmlTooltip>;
        default:
            return <></>;
    }
};
