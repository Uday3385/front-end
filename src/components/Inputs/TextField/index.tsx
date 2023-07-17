import * as React from 'react';

import TextFieldMui, { type TextFieldProps } from '@mui/material/TextField';
import type { BoxProps } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';

import { useInputFieldDefaultValue, useInputFieldRef } from '@/src/hooks/useInputField';
import InputFieldContainer from '@/src/components/Containers/InputFieldContainer';
import InputLabel, { type LabelProps } from '@/src/components/Inputs/InputLabel';
import styles from './styles';

export type InputFieldElement = any;
export type InputFieldElements = HTMLInputElement | HTMLTextAreaElement;
export type InputRef = React.MutableRefObject<any>;
export type InputFieldRefType = React.Ref<InputFieldElement | undefined> | undefined;

export const textareaInputProps = {
    multiline: true,
    rows: 3,
    size: 'small',
};

export type InputValidationProps = {
    isSubmittingForm?: boolean;
    realtimeValidationOnType?: boolean;
    validationProps?: boolean;
    containerProps?: BoxProps;
    validateOnLoad?: boolean;
    requiredLabel?: React.ReactNode;
    labelProps?: LabelProps;
    minLength?: number;
    trimValue?: boolean;
    maxLength?: number;
    showError?: boolean;
    inputRef?: InputRef;
    validate?: {
        regex?: RegExp;
        invalidLabel?: ''; // Default to: `{label} is invalid`
        errorLabel?: ''; // Default to: {label}
        emptyLabel?: ''; // Default to: `{label} is required`

        // `${label} minimum ${pluralizeCharacterText(minLength)} is ${minLength}.`
        minLengthErrorLabel?: '';

        // `${label} maximum ${pluralizeCharacterText(maxLength)} is ${maxLength}.`
        maxLengthErrorLabel?: '';

        /**
         * A custom validator function.
         *
         * @param {string|number} value Input field value.
         * @param {HTMLFormElement} ref HTML form input element.
         *
         * @return {bool|object} True if field is valid.
         * Otherwise false or an object with the following properties:
         * - error: (bool) True if field is invalid.
         * - helperText: (React.ReactNode) Error helper text
         */
        customValidator?: (value: unknown, ref: InputFieldRefType) => { error: boolean; helperText: string } | boolean;
    };

    /**
     * Validation error callback function. If defined, it fires if
     * validation fails.
     */
    validationErrorCallback?: ({ value, inputRef }: { value: unknown; inputRef: InputRef }) => void;

    /**
     * Validation success callback function. If defined, it fires if
     * validation was successful.
     */
    validationSuccessCallback?: ({ value, inputRef }: { value: unknown; inputRef: InputRef }) => void;
};

export type TextFieldType = Omit<TextFieldProps, 'inputRef'> & InputValidationProps;

export default function TextField({
    validationSuccessCallback,
    validationErrorCallback,
    realtimeValidationOnType = false,
    isSubmittingForm = false,
    validationProps = true,
    containerProps = {},
    validateOnLoad = false,
    requiredLabel = ' *',
    autoComplete = undefined,
    placeholder = '',
    labelProps = {},
    helperText = '',
    multiline = false,
    fullWidth = true,
    showError = true,
    trimValue = false,
    disabled = false,
    required = true,
    validate = {},
    variant = 'outlined',
    error = false,
    label = 'Label',
    name = '',
    type = 'text',
    defaultValue,
    minLength,
    maxLength,
    onChange,
    inputRef,
    value,
    ref,
    id,
    sx = {},
    ...props
}: TextFieldType) {
    const inputFieldRef = useInputFieldRef(inputRef),
        hasShownErrorForFirstTime = React.useRef(false),
        autoFilledFallbackChecked = React.useRef(false),
        [hasError, setHasError] = React.useState(error),
        [fieldHelperText, setFieldHelperText] = React.useState(helperText),
        regex = validate.regex,
        hasRegex = regex && typeof regex === 'object',
        errorLabel = validate.errorLabel || label,
        isEmailField = type === 'email',
        invalidLabel = validate.invalidLabel || `${errorLabel} is invalid`,
        emptyErrorLabel = validate.emptyLabel || `${errorLabel} is required`,
        customValidator = validate.customValidator,
        minLengthErrorLabel = validate.minLengthErrorLabel,
        maxLengthErrorLabel = validate.maxLengthErrorLabel;

    useInputFieldDefaultValue({ value: defaultValue, ref: inputFieldRef });

    /**
     * Make error a dependency to re-render component if
     * it's changed and painting is completed.
     */
    React.useEffect(() => {
        setHasError(error);
    }, [error]);

    React.useEffect(() => {
        setFieldHelperText(helperText);
    }, [helperText]);

    React.useEffect(() => {
        (validateOnLoad || isSubmittingForm) && validateInputField();
    }, [isSubmittingForm, validateOnLoad]);

    const getInputFieldValue = () => {
        const fieldValue = trimValue ? inputFieldRef.current.value.trim() : inputFieldRef.current.value;

        return isEmailField ? fieldValue.toLowerCase() : fieldValue;
    };

    const pluralizeCharacterText = (len: number) => (len > 1 ? 'characters' : 'character');

    /**
     * This is used to implement fallback for auto-filled input fields.
     */
    const validateInputField = (showError = true) => {
        const fieldValue = getInputFieldValue(),
            fieldValueLen = fieldValue.length;

        // Required field check
        if (required && fieldValueLen < 1) {
            showError && displayFieldError(emptyErrorLabel);
            return;
        }

        // Minimum field value length check
        if (!isInputMinLengthOkay(fieldValueLen, showError)) {
            return;
        }

        // Maximum field value length check
        if (!isInputMaxLengthOkay(fieldValueLen, showError)) {
            return;
        }

        // Regex pattern check
        if (hasRegex && !regex?.test(fieldValue)) {
            displayFieldError(invalidLabel);
            return;
        }

        // Custom validator check
        if (!isCustomValidationCheckOkay(fieldValue)) return;

        // Clear field error
        showError && clearFieldError();

        // Fires validation success callback if defined
        validationSuccessCallback &&
            validationSuccessCallback({
                value: fieldValue,
                inputRef: inputFieldRef,
            });

        return true;
    };

    const isInputMinLengthOkay = (fieldValueLen: number, showError: boolean) => {
        if (showError && minLength && fieldValueLen < minLength) {
            const minLengthError =
                minLengthErrorLabel || `${errorLabel} minimum ${pluralizeCharacterText(minLength)} is ${minLength}.`;

            displayFieldError(minLengthError);
            return false;
        }
        return true;
    };

    const isInputMaxLengthOkay = (fieldValueLen: number, showError: boolean) => {
        if (showError && maxLength && fieldValueLen > maxLength) {
            const maxLengthError =
                maxLengthErrorLabel || `${errorLabel} maximum ${pluralizeCharacterText(maxLength)} is ${maxLength}.`;

            displayFieldError(maxLengthError);
            return;
        }
        return true;
    };

    const isCustomValidationCheckOkay = (fieldValue: unknown) => {
        if (customValidator) {
            const validateInput = customValidator(fieldValue, inputFieldRef.current);

            if (true !== validateInput && (!validateInput || validateInput?.error)) {
                const errorTextLabel = typeof validateInput === 'object' ? validateInput?.helperText : invalidLabel;
                displayFieldError(errorTextLabel);
                return false;
            }
        }

        return true;
    };

    const displayFieldError = (errorText: string) => {
        setHasError(true);
        setFieldHelperText(errorText);
        setErrorDisplayState();

        // Fires validation error callback if defined
        validationErrorCallback &&
            validationErrorCallback({
                value: getInputFieldValue(),
                inputRef: inputFieldRef,
            });
    };

    /**
     * Set the error display state
     */
    const setErrorDisplayState = () => {
        if (!hasShownErrorForFirstTime.current) {
            hasShownErrorForFirstTime.current = true;
        }
    };

    /**
     * Clear input field error
     */
    const clearFieldError = () => {
        setHasError(false);
        setFieldHelperText('');
    };

    /**
     * If field error is shown for the first time, then validate field
     * when value is changed.
     */
    const handleValueChange = async (e: React.ChangeEvent<InputFieldElements>) => {
        if (hasShownErrorForFirstTime.current || realtimeValidationOnType) {
            validateInputField();
        } else {
            // fallback for auto-filled input fields
            if (!autoFilledFallbackChecked.current && true === validateInputField(false)) {
                // Should run just once
                autoFilledFallbackChecked.current = true;
                setErrorDisplayState();
            }
        }

        onChange && onChange(e);
    };

    const style = { ...styles.inputField({ multiline }), ...sx },
        textAreaProps = multiline ? textareaInputProps : {},
        containerStyle = multiline ? { alignItems: 'flex-start', ...(containerProps.sx || {}) } : containerProps.sx;

    return (
        <InputFieldContainer {...containerProps} sx={containerStyle}>
            {label !== null && (
                <InputLabel {...labelProps} id={id} label={label} required={required} requiredLabel={requiredLabel} />
            )}

            <TextFieldMui
                id={id}
                sx={style}
                type={type}
                name={name}
                value={value}
                error={hasError}
                variant={variant}
                inputRef={inputFieldRef}
                required={required}
                disabled={disabled}
                fullWidth={fullWidth}
                onChange={handleValueChange}
                placeholder={placeholder}
                autoComplete={autoComplete}
                defaultValue={defaultValue}
                {...textAreaProps}
                {...props}
                inputProps={{
                    ...(props.inputProps || {}),
                    minLength: !validationProps ? undefined : minLength,
                    maxLength: !validationProps ? undefined : maxLength,
                }}
            />

            {containerProps?.children}

            {showError && hasError && <FormHelperText error={hasError}>{fieldHelperText}</FormHelperText>}
        </InputFieldContainer>
    );
}
