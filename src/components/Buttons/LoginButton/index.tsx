import Button, { type ButtonProps } from '@mui/material/Button';
import styles from './styles';

export default function LoginButton({ children, style = {}, ...props }: ButtonProps) {
    const rootStyle = { ...styles, ...style };

    return (
        <Button {...props} style={rootStyle}>
            {children}
        </Button>
    );
}
