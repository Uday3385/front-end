import * as React from 'react';
import FormControlLabel, { type FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormControl, { type FormControlProps } from '@mui/material/FormControl';
import RadioGroup, { type RadioGroupProps } from '@mui/material/RadioGroup';
import FormLabel, { type FormLabelProps } from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';

type ValueType = string | number;

export type RadioButtonOptions = {
    value: ValueType;
    label: React.ReactNode;
    style?: React.CSSProperties;
    props?: FormControlLabelProps;
}[];

export type RadioButtonType = {
    formControlProps?: FormControlProps;
    radioGroupProps?: RadioGroupProps;
    formLabel?: { id: string; label: React.ReactNode; props?: FormLabelProps };
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef?: React.MutableRefObject<HTMLInputElement>;
    defaultValue?: ValueType;
    value?: ValueType;
    style?: React.CSSProperties;
    name: string;
    options: RadioButtonOptions;
};

export default function RadioButton({
    formControlProps = {},
    radioGroupProps = {},
    defaultValue,
    formLabel,
    onChange,
    inputRef,
    options,
    style,
    value,
    name,
}: RadioButtonType) {
    const lastOptionIndex = options.length - 1;

    const renderFormLabel = formLabel ? (
        <FormLabel {...(formLabel.props || {})} id={formLabel.id}>
            {formLabel.label}
        </FormLabel>
    ) : null;

    const renderRadio = <Radio style={{ height: '20px', width: '33px' }} />;

    const renderControlLabels = options.map((option, index) => {
        const style = {
            fontSize: '13px',
            height: '20px',
            textTransform: 'capitalize',
            marginRight: index !== lastOptionIndex ? '20px' : '0px',

            '& .MuiTypography-root': {
                fontSize: '14px',
            },

            '& svg': {
                width: '22px',
                height: '22px',
            },
            ...(option.style || {}),
        };

        return (
            <FormControlLabel
                key={option.value}
                className="formControlLabel"
                {...(option.props || {})}
                value={option.value}
                control={renderRadio}
                label={option.label}
                sx={style}
            />
        );
    });

    return (
        <FormControl className="radioButtonInput" sx={style} size="small" {...formControlProps}>
            {renderFormLabel}
            <RadioGroup
                row
                {...radioGroupProps}
                aria-labelledby={formLabel ? formLabel.id : undefined}
                name={name}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                className="radioButtonGroup"
                ref={inputRef}
            >
                {renderControlLabels}
            </RadioGroup>
        </FormControl>
    );
}
