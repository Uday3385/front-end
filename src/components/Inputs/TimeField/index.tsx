import { TimePicker, type TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import { type TimeView } from '@mui/x-date-pickers';

import type { InputValidationProps } from '@/src/components/Inputs/TextField';
import { type DatePickerExtraProps } from '@/src/components/Inputs/DateField';
import InputFieldContainer from '@/src/components/Containers/InputFieldContainer';
import { formatDate } from '@/src/utils/date';
import InputLabel from '@/src/components/Inputs/InputLabel';
import styles from '@/src/components/Inputs/TextField/styles';

export type Props = TimePickerProps<typeof TimePicker> &
    DatePickerExtraProps &
    InputValidationProps & {
        onTimeChange?: (time: string, context: any) => void;
    };

export default function TimeField({
    onTimeChange,
    containerProps = {},
    requiredLabel,
    labelProps = {},
    required,
    label,
    sx = {},
    id,
    ...props
}: Props) {
    const timeViews: TimeView[] = ['hours', 'minutes'];

    const handleTimeChange: Props['onChange'] = async (timeVal, context) => {
        if (!timeVal) return;

        const formatTime = formatDate(timeVal as unknown as string, 'HH:mm');
        onTimeChange && onTimeChange(formatTime, context);
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
            <TimePicker
                ampm={false}
                ampmInClock={false}
                disableFuture={true}
                onChange={handleTimeChange}
                className="timeInput"
                views={timeViews}
                {...props}
                sx={style}
            />
        </InputFieldContainer>
    );
}
