import * as React from 'react';

import FormControlLabel, { type FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormControl, { type FormControlProps } from '@mui/material/FormControl';
import RadioGroup, { type RadioGroupProps } from '@mui/material/RadioGroup';
import FormGroup, { type FormGroupProps } from '@mui/material/FormGroup';
import FormLabel, { type FormLabelProps } from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';

import { RequiredLabelFlag } from '@/src/components/Inputs/InputLabel';

type ValueType = string | number;

export type RadioButtonOptions = {
    style?: React.CSSProperties;
    props?: FormControlLabelProps;
    label: React.ReactNode;
    value: ValueType;
}[];

export type RadioButtonType = {
    showRequiredLabel?: boolean;
    formControlProps?: FormControlProps;
    radioGroupProps?: RadioGroupProps;
    formGroupProps?: FormGroupProps;
    requiredLabel?: React.ReactNode;
    defaultValue?: ValueType;
    isCheckbox?: boolean;
    formLabel?: { id: string; label: React.ReactNode; props?: FormLabelProps };
    isColumn?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef?: React.MutableRefObject<HTMLInputElement>;
    required?: boolean;
    options: RadioButtonOptions;
    value?: ValueType;
    style?: React.CSSProperties;
    name: string;
};

export default function RadioButton({
    formControlProps = {},
    radioGroupProps = {},
    formGroupProps = {},
    requiredLabel = '*',
    isColumn = false,
    defaultValue,
    isCheckbox,
    formLabel,
    required,
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
            {required && <RequiredLabelFlag requiredLabel={requiredLabel} />}
        </FormLabel>
    ) : null;

    const RenderInput = isCheckbox ? Checkbox : Radio;

    const renderRadio = <RenderInput style={{ height: '20px', width: '33px' }} />;

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

    const groupProps = isCheckbox ? formGroupProps : radioGroupProps,
        InputGroup = isCheckbox ? FormGroup : RadioGroup;

    let className = 'radioButtonInput';
    if (isCheckbox) {
        className += ' checkboxButtonInput';
    }

    return (
        <FormControl className={className} sx={style} size="small" {...formControlProps}>
            {renderFormLabel}
            <InputGroup
                row={!isColumn}
                {...groupProps}
                aria-labelledby={formLabel ? formLabel.id : undefined}
                name={name}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                className="radioButtonGroup"
                ref={inputRef}
            >
                {renderControlLabels}
            </InputGroup>
        </FormControl>
    );
}
