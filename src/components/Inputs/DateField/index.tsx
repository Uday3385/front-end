import { DatePicker, type DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { formatDate } from '@/src/utils/date';

import type { InputValidationProps } from '@/src/components/Inputs/TextField';
import InputFieldContainer from '@/src/components/Containers/InputFieldContainer';
import InputLabel from '@/src/components/Inputs/InputLabel';
import styles from '@/src/components/Inputs/TextField/styles';

export type DatePickerExtraProps = {
    required?: boolean;
    id?: string;
};

export type Props = DatePickerProps<typeof DatePicker> &
    DatePickerExtraProps &
    InputValidationProps & {
        onDateChange?: (date: string, context: any) => void;
    };

export default function DateField({
    onDateChange,
    containerProps = {},
    requiredLabel,
    labelProps = {},
    required,
    label,
    id,
    sx = {},
    ...props
}: Props) {
    const handleDateChange: Props['onChange'] = async (dateVal, context) => {
        if (!dateVal) return;

        const formatTime = formatDate(dateVal as unknown as string);
        onDateChange && onDateChange(formatTime, context);
    };

    const style = { ...styles.inputField(), ...sx };

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
            <DatePicker
                // value={date as Props['value']}
                disableFuture={true}
                onChange={handleDateChange}
                className="dateInput"
                {...props}
                sx={style}
            />
        </InputFieldContainer>
    );
}
