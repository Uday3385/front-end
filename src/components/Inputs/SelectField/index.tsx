import * as React from 'react';

import Select, { type SelectProps } from '@mui/material/Select';
import { type MenuProps } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';

import SelectFieldSearchMenu, { type SelectFieldSearchMenuProps } from '../SelectFieldSearchMenu';
import { type InputValidationProps } from '@/src/components/Inputs/TextField';
import { useInputFieldRef } from '@/src/hooks/useInputField';
import InputFieldContainer from '@/src/components/Containers/InputFieldContainer';
import { borderColor } from '@/src/theme/colors';
import InputLabel from '@/src/components/Inputs/InputLabel';

export type SelectFieldType = SelectProps &
    Omit<SelectFieldSearchMenuProps, 'items'> &
    InputValidationProps & {
        skipSelectPlaceholder?: boolean;
        isSearchEnabled?: boolean;
        searchPlaceholder?: string;
        defaultValue?: any;

        menuProps?: MenuProps;
        helperText?: React.ReactNode;
        menuWidth?: string | number;
        menuHeight?: string | number;
        items?: any[];
    };

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 16;

/**
 * Select field component
 *
 * Note: Props of the SelectFieldSearchMenu are also available directly.
 * Note: If `isSearchEnabled` is disabled, use the `inputProps` to pass props directly to the SelectField component.
 */
const SelectField = (props: SelectFieldType) => {
    const {
        value,
        items,
        inputRef,
        minLength,
        maxLength,
        onChange,
        renderValue,
        defaultValue,
        searchPlaceholder,
        id,
        sx = { mt: 1, '& .MuiSelect-select': { padding: '10px 10px', fontSize: 14 } },
        name = '',
        type = 'text',
        error = false,
        label = 'Label',
        variant = 'outlined',
        disabled = false,
        required = true,
        menuProps,
        labelProps,
        endAdornment,
        fullWidth = true,
        trimValue = true,
        showError = true,
        inputProps = {},
        helperText = '',
        placeholder = '',
        autoComplete = undefined,
        menuWidth = 410,
        menuHeight = ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        displayEmpty = true,
        isSearchEnabled = true,
        requiredLabel = ' *',
        containerProps = {},
        isSubmittingForm = false,
        skipSelectPlaceholder = true,

        // Whether to validate the input field when loaded
        validateOnLoad = false,

        // Whether to validate the input field as you type,
        // useful for auth fields such as: Verification code.
        realtimeValidationOnType = false,

        // Control whether to add the validation props to
        // the input field, e.g: minLength, maxLength, etc.
        validationProps = true,

        validate = {
            regex: null,
            errorLabel: '', // Default to: {label}
            emptyLabel: '', // Default to: `{label} is required`
            invalidLabel: '', // Default to: `{label} is invalid`

            // `${label} minimum ${pluralizeCharacterText(minLength)} is ${minLength}.`
            minLengthErrorLabel: '',

            // `${label} maximum ${pluralizeCharacterText(maxLength)} is ${maxLength}.`
            maxLengthErrorLabel: '',

            /**
             * A custom validator function.
             *
             * @param {string|number} value Input field value.
             * @param {HTMLFormElement} inputRef HTML form input element.
             *
             * @return {bool|object} True if field is valid.
             * Otherwise false or an object with the following properties:
             * - error: (bool) True if field is invalid.
             * - helperText: (React.ReactNode) Error helper text
             */
            customValidator: null,
        },

        /**
         * Validation error callback function. If defined, it fires if
         * validation fails.
         * @param {object} args
         * @param {number|string} args.value Input field value.
         * @param {HTMLFormElement} args.inputRef HTML form input element.
         * @returns {void}
         */
        validationErrorCallback = null,

        /**
         * Validation success callback function. If defined, it fires if
         * validation was successful.
         * @param {object} args
         * @param {number|string} args.value Input field value.
         * @param {HTMLFormElement} args.inputRef HTML form input element.
         * @returns {void}
         */
        // validationSuccessCallback = null,

        ...otherProps
    } = props;

    const inputFieldRef = useInputFieldRef(inputRef),
        hasShownErrorForFirstTime = React.useRef(false),
        autoFilledFallbackChecked = React.useRef(false),
        optionsRef = React.useRef({} as { [key: string]: any }[]),
        [hasError, setHasError] = React.useState(error),
        [selectedValue, setSelectedValue] = React.useState(value),
        [fieldHelperText, setFieldHelperText] = React.useState(helperText),
        [openSelectMenu, setOpenSelectMenu] = React.useState(false),
        regex = validate.regex,
        hasRegex = regex && typeof regex === 'object',
        errorLabel = validate.errorLabel || (typeof label === 'string' ? label : placeholder || 'Field'),
        invalidLabel = validate.invalidLabel || `${errorLabel} is invalid`,
        emptyErrorLabel = validate.emptyLabel || `${errorLabel} is required`,
        customValidator = validate.customValidator,
        minLengthErrorLabel = validate.minLengthErrorLabel,
        maxLengthErrorLabel = validate.maxLengthErrorLabel,
        fieldItems = items;

    if (!fieldItems?.length) {
        throw 'SelectField: `items` prop is required.';
    }

    React.useEffect(() => {
        if (defaultValue !== undefined) {
            setSelectedValue(defaultValue);
        } else if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [defaultValue, value]);

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
        const normalizeValue = inputFieldRef.current?.value || '';
        return trimValue ? normalizeValue?.toString()?.trim() : normalizeValue || '';
    };

    const pluralizeCharacterText = (len: number) => (len > 1 ? 'characters' : 'character');

    const validateInputField = (showError = true) => {
        const fieldValue = getInputFieldValue(),
            fieldValueLen = fieldValue?.length;

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
        // validationSuccessCallback &&
        //     validationSuccessCallback({
        //         value: fieldValue,
        //         inputRef: inputFieldRef,
        //     });

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

    const isCustomValidationCheckOkay = (fieldValue: any) => {
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
    const handleValueChange: SelectProps['onChange'] = async (e) => {
        const fieldValue = e.target.value;
        setSelectedValue(fieldValue);
        inputFieldRef.current.value = fieldValue;

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

        onChange && onChange(e, e.target as unknown as React.ReactNode);
    };

    /**
     * Close select menu
     */
    const handleCloseMenu = () => {
        setOpenSelectMenu(false);
    };

    const fieldMenuProps: MenuProps = {
            autoFocus: true,
            PaperProps: {
                style: {
                    maxHeight: menuHeight,
                    width: menuWidth,
                },
            },
            onKeyDown: (e) => {
                const targetElem = e.target as HTMLSelectElement,
                    isEnterKey = e.key?.toLowerCase() === 'enter';

                let menuElem = targetElem?.firstElementChild;
                if (!menuElem && targetElem?.classList?.contains('menuSearchInput')) {
                    menuElem = targetElem?.closest('.MuiList-root');
                }

                if (isEnterKey && menuElem && menuElem?.classList?.contains('MuiList-root')) {
                    const menuChildren = menuElem?.children as unknown as any[];

                    const handleAlreadySelectedItem = () => {
                        for (const item of menuChildren) {
                            if (item?.classList?.contains('Mui-selected')) {
                                item?.click();
                                break;
                            }
                        }
                    };

                    if (menuChildren) {
                        const countChildren = menuChildren?.length;

                        if (1 === countChildren) {
                            menuChildren[0]?.click();
                        } else if (2 === countChildren) {
                            const secondMenuItem = menuChildren?.[1];
                            if (secondMenuItem) {
                                if (isSearchEnabled) {
                                    secondMenuItem?.click();
                                } else if (skipSelectPlaceholder && secondMenuItem?.getAttribute('data-value') === '') {
                                    secondMenuItem?.click();
                                } else {
                                    handleAlreadySelectedItem();
                                }
                            } else {
                                handleAlreadySelectedItem();
                            }
                        } else {
                            handleAlreadySelectedItem();
                        }
                    }
                }
            },
            ...(menuProps || {}),
            sx: {
                ...(menuProps?.sx || {}),
                '& .MuiMenuItem-root': {
                    fontSize: '14px !important',
                },
            },
        } as MenuProps,
        renderValueStyle = {
            color: '#33333345',
            fontSize: '14px',
        };

    const renderOptions =
        fieldItems &&
        fieldItems.map((inputData, index) => {
            // Skip first value if empty, and skipSelectPlaceholder is true, and field is required
            if (index === 0 && inputData.value === '' && skipSelectPlaceholder && required) return null;

            const itemValue = otherProps?.getItemValue
                    ? otherProps.getItemValue(inputData, index)
                    : inputData?.value || '',
                itemLabel = otherProps?.getItemLabel
                    ? otherProps.getItemLabel(inputData, index)
                    : inputData?.label || '',
                itemId = otherProps?.getItemId ? otherProps.getItemId(inputData, index) : itemValue;

            // This is use to quickly retrieve the selected input label
            optionsRef.current[itemValue] = itemLabel;

            return (
                <MenuItem
                    key={itemId}
                    value={itemValue}
                    selected={itemValue === selectedValue}
                    onClick={handleCloseMenu}
                >
                    {itemLabel}
                </MenuItem>
            );
        });

    const renderFieldValue: SelectProps['renderValue'] = (selected) => {
        if (!selected?.toString()?.length) {
            return <span style={renderValueStyle}>{placeholder}</span>;
        }

        const itemLabel = optionsRef.current[selected as any] as any;
        return renderValue ? renderValue({ label: itemLabel, value: selected }) : itemLabel;
    };

    const isSelectSearchField = isSearchEnabled && fieldItems?.length > 5;

    const inputStyle = {
            marginTop: 0,
            height: '35px',
        },
        fieldProps: SelectProps = {
            sx: {
                backgroundColor: '#fff !important',
                '& .MuiInputBase-input': {
                    fontSize: '14px !important',
                    fontWeight: '400 !important',
                    backgroundColor: 'transparent !important',
                },

                '& .MuiSelect-select span': {
                    color: `${borderColor.greyDarken} !important`,
                },

                '& .MuiInputBase-root': {
                    height: '35px',
                },
                ...(sx || {}),
            },
            id,
            name,
            value: selectedValue || '',
            error: hasError,
            variant: variant,
            required: required,
            disabled: disabled,
            inputRef: inputFieldRef,
            fullWidth: fullWidth,
            onChange: handleValueChange as any,
            placeholder: placeholder,
            displayEmpty: displayEmpty,
            autoComplete: autoComplete,
            endAdornment,
            // defaultValue:defaultValue,
            input: (
                <OutlinedInput
                    endAdornment={endAdornment}
                    autoFocus={false}
                    style={inputStyle}
                    label=""
                    id={id}
                    fullWidth
                />
            ),
            MenuProps: fieldMenuProps,
            renderValue: renderFieldValue,
            open: openSelectMenu,
            onClose: () => {
                setOpenSelectMenu(false);
            },
            SelectDisplayProps: {
                onKeyDown: (e) => {
                    const eventKey = e.key?.toLowerCase(),
                        canOpenSelectMenuWithKey = eventKey !== 'tab' && eventKey !== 'escape';

                    if (canOpenSelectMenuWithKey) {
                        !openSelectMenu && setOpenSelectMenu(true);
                    }
                },
                onClick: () => {
                    !openSelectMenu && setOpenSelectMenu(true);
                },
            },
            ...inputProps,
        } as SelectProps;

    if (fieldProps?.disabled) {
        fieldProps.open = false;
    }

    return (
        <InputFieldContainer {...containerProps}>
            {label !== null && (
                <InputLabel
                    {...labelProps}
                    htmlFor={id}
                    label={label}
                    required={required}
                    requiredLabel={requiredLabel}
                />
            )}

            {isSelectSearchField ? (
                <SelectFieldSearchMenu
                    selectComponentProps={fieldProps}
                    placeholder={searchPlaceholder}
                    required={required}
                    items={fieldItems}
                    {...otherProps}
                />
            ) : (
                <Select {...fieldProps}>{renderOptions}</Select>
            )}

            {showError && hasError && <FormHelperText error={hasError}>{fieldHelperText}</FormHelperText>}
        </InputFieldContainer>
    );
};

export default SelectField;
