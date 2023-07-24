import * as React from 'react';

import Box from '@mui/material/Box';

import TextField, { type TextFieldType } from '@/src/components/Inputs/TextField';
import styles from './styles';

type LoginInputType = TextFieldType & {
    requiredMarkerMargin?: string;
    errorLabel?: string;
};

export default function LoginInput({
    requiredMarkerMargin,
    errorLabel = '',
    required = true,
    ...props
}: LoginInputType) {
    const [value, setValue] = React.useState(''),
        rootStyles = styles({ requiredMarkerMargin, required, value });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <Box sx={rootStyles} className="loginInputWrapper">
            <TextField
                className="loginInputField"
                validate={{ errorLabel }}
                onChange={handleChange}
                value={value}
                label={null}
                {...props}
            />
        </Box>
    );
}
