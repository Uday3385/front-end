import Typography from '@mui/material/Typography';
import React from 'react';

const NoDataTableContent = ({
    text = 'No Data Found' as React.ReactNode,
    color = '#888',
    fontSize = '13px',
    borderTop = '0px',
    border = true,
    margin = '0',
    height = '6vh',
    rootStyle = {} as React.CSSProperties,
    textStyle = {} as React.CSSProperties,
    borderColor = '#E0E0E0',
    alignItems = 'center',
    justifyContent = 'center',
}) => {
    const rootStyles: React.CSSProperties = {
            height,
            margin,
            alignItems,
            justifyContent,
            display: 'flex',
            width: '100%',
            ...rootStyle,
        },
        textStyles = {
            color,
            fontSize,
            display: 'flex',
            ...textStyle,
        };

    if (border) {
        rootStyles.borderWidth = `${borderTop ? '1px' : '0px'} 1px 1px 1px`;
        rootStyles.borderColor = borderColor;
        rootStyles.borderStyle = 'solid';
    }

    return (
        <div style={rootStyles}>
            <Typography component="div" style={textStyles}>
                {text}
            </Typography>
        </div>
    );
};

export default NoDataTableContent;
