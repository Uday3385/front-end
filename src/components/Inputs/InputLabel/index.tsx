import * as React from 'react';
import Typography, { type TypographyProps } from '@mui/material/Typography';
import InputLabelMui, { type InputLabelProps } from '@mui/material/InputLabel';

type RequiredFlag = TypographyProps & { requiredLabel: React.ReactNode };

export type LabelProps = InputLabelProps & { requiredLabel?: React.ReactNode; label?: React.ReactNode };

export const RequiredLabelFlag = ({ requiredLabel = ' *', ...props }: RequiredFlag) => {
    const requiredStyle = {
        top: '2px',
        color: 'red',
        lineHeight: 'inherit',
        position: 'relative',
        marginLeft: '2px',
    };

    return (
        <Typography sx={requiredStyle} variant="subtitle1" component="span" {...props}>
            {requiredLabel}
        </Typography>
    );
};

const InputLabel = ({ required = false, requiredLabel, label, style = {}, ...props }: LabelProps) => {
    if (!label) return null;

    const rootStyle = {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        minHeight: '35px',
        ...style,
    };

    return (
        <InputLabelMui className="inputLabel" {...props} style={rootStyle}>
            {label}
            {required && requiredLabel && <RequiredLabelFlag requiredLabel={requiredLabel} />}
        </InputLabelMui>
    );
};

export default InputLabel;
