'use client';

import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';

import DateField, { type Props as DateProps } from '@/src/components/Inputs/DateField';
import SelectField, { type SelectFieldType } from '@/src/components/Inputs/SelectField';
import * as constants from '@/src/utils/constants';
import inputStyles from '@/src/styles/inputField';
import styles from './styles';

export type SelectDateFieldProps = SelectFieldType & {
    onDateChange?: DateProps['onDateChange'];
    labelMinWidth?: string;
    marginBottom?: string;
    labelWeight?: number;
    items?: any[];
};

export default function SelectDateField({
    onDateChange,
    labelWeight = 600,
    labelMinWidth = '100px',
    marginBottom,
    ...props
}: SelectDateFieldProps) {
    const dateRangeWrapperRef = React.useRef<HTMLDivElement | null>(null),
        dateFieldRef = React.useRef<HTMLDivElement | null>(null),
        [options, setOptions] = React.useState([{ label: 'Select', value: '' }].concat(constants.DATE_RANGES));

    const handleDateChange: DateProps['onDateChange'] = async (e: string, context) => {
        onDateChange && onDateChange(e, context);
    };

    const labelProps = {
            style: { ...inputStyles.inputLabel, fontWeight: labelWeight, minWidth: labelMinWidth },
        },
        containersProps = {
            sx: { ...inputStyles.selectDateFieldContainer, marginBottom },
        },
        dateRangeWrapperStyle = {
            display: 'flex',
            alignItems: 'center',
        };

    const inputAdornment = (
        <InputAdornment position="end">
            <div ref={dateRangeWrapperRef} style={dateRangeWrapperStyle}>
                <DateField
                    label={null}
                    containerProps={{ sx: styles }}
                    onDateChange={handleDateChange}
                />
            </div>
        </InputAdornment>
    );

    return (
        <SelectField
            skipSelectPlaceholder={false}
            containerProps={containersProps}
            placeholder="Select"
            labelProps={labelProps}
            required={true}
            label="Date Range"
            endAdornment={inputAdornment}
            {...props}
            items={props.items || options}
        />
    );
}
