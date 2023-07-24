import * as React from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import Box from '@mui/material/Box';

import LoginEmailInput from '@/src/components/AuthForm/LoginEmailInput';
import { useRouter } from '@/src/hooks/useNavigation';
import LoginButton from '@/src/components/Buttons/LoginButton';
import LoginInput from '@/src/components/Inputs/LoginInput';
import styles from './styles';

export default function LoginFields() {
    const navigate = useRouter(),
        [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleForgotPasswordPage = () => {
        navigate('/forgot-password');
    };

    const passwordInputProps = {
        endAdornment: (
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    style={{ marginRight: '-5px' }}
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        ),
    };

    return (
        <>
            <LoginEmailInput />

            <LoginInput
                requiredMarkerMargin="76px"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                errorLabel="Password"
                autoComplete="off"
                InputProps={passwordInputProps}
            />

            <Box sx={styles}>
                <div className="rememberMeWrapper">
                    <FormControlLabel control={<Checkbox />} label="Remember Me" />
                </div>
                <Typography component="div" className="forgotPasswordText" onClick={handleForgotPasswordPage}>
                    Forgot Password?
                </Typography>
            </Box>

            <LoginButton>Log in</LoginButton>
        </>
    );
}
