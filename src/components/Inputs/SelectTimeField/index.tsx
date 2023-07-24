'use client';

import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';

import TimeField, { type Props as TimeProps } from '@/src/components/Inputs/TimeField';
import SelectField, { type SelectFieldType } from '@/src/components/Inputs/SelectField';
import type { SelectDateFieldProps } from '@/src/components/Inputs/SelectDateField';
import * as constants from '@/src/utils/constants';
import inputStyles from '@/src/styles/inputField';
import styles from '@/src/components/Inputs/SelectDateField/styles';

type Props = Omit<SelectDateFieldProps, 'onDateChange'> &
    SelectFieldType & {
        onTimeChange?: TimeProps['onTimeChange'];
    };

export default function SelectTimeField({
    onTimeChange,
    labelMinWidth = '100px',
    labelWeight = 600,
    marginBottom, 
    ...props
}: Props) {
    const timeFieldRef = React.useRef<HTMLElement | null>(null),
        [options, setOptions] = React.useState([{ label: 'Select', value: '' }].concat(constants.TIME_RANGES));

    const handleDateChange: TimeProps['onTimeChange'] = async (e: string, context) => {
        onTimeChange && onTimeChange(e, context);
    };

    const labelProps = {
            style: { ...inputStyles.inputLabel, fontWeight: labelWeight, minWidth: labelMinWidth },
        },
        containersProps = {
            sx: { ...inputStyles.selectDateFieldContainer, marginBottom },
        };

        const inputAdornment = <InputAdornment position="end">
                    <TimeField
                        containerProps={{sx: styles}}
                        onTimeChange={handleDateChange}
                        label={null}
                    />
                </InputAdornment>

    return (
        <SelectField
            skipSelectPlaceholder={false}
            containerProps={containersProps}
            placeholder="Select"
            labelProps={labelProps}
            required={true}
            label="Time Range"
            endAdornment={
                inputAdornment
            }
            {...props}
            items={props.items || options}
        />
    );
}
