import { TimePicker, type TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import { type TimeView } from '@mui/x-date-pickers';

import { formatDate } from '@/src/utils/date';
import styles from '@/src/components/Inputs/TextField/styles';

type Props = TimePickerProps<typeof TimePicker> & {
    onTimeChange?: (time: string, context: any) => void;
};

export default function TimeField({ onTimeChange, sx = {}, ...props }: Props) {
    const timeViews: TimeView[] = ['hours', 'minutes'];

    const handleTimeChange: Props['onChange'] = async (timeVal, context) => {
        if (!timeVal) return;

        const formatTime = formatDate(timeVal as unknown as string, 'HH:mm');
        onTimeChange && onTimeChange(formatTime, context);
    };

    const style = { ...styles.inputField(), ...sx };

    return (
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
    );
}
