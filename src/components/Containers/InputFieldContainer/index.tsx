import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';

export default function InputFieldContainer({ children, sx = {}, ...props }: BoxProps) {
    const rootStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        ...sx,
    };

    return (
        <Box {...props} sx={rootStyle} className="selectFieldWrapper">
            {children}
        </Box>
    );
}
