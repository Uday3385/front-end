'use client';

import * as React from 'react';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ContinueWithEmailButton from '@/src/components/AuthForm/ContinueWithEmailButton';
import LoginOtherOptionLine from '@/src/components/AuthForm/LoginOtherOptionLine';
import type { AuthFormProps } from '@/src/components/AuthForm';
import ForgotPasswordFields from '@/src/components/AuthForm/ForgotPasswordFields';
import LoginProviders from '@/src/components/AuthForm/LoginProviders';
import { useRouter } from '@/src/hooks/useNavigation';
import SignUpFields from '@/src/components/AuthForm/SignUpFields';
import LoginFields from '@/src/components/AuthForm/LoginFields';
import LoginTitle from '@/src/components/AuthForm/LoginTitle';
import styles from './styles';

export type LoginType = 'providers' | 'email';

export default function LoginForm({ formType, title, welcomeBackText }: AuthFormProps) {
    const navigate = useRouter(),
        isForgotPasswordForm = formType === 'forgotPassword',
        isSignUpForm = formType === 'signUp',
        isLoginForm = formType === 'login',
        [loginType, setLoginType] = React.useState<LoginType>(isForgotPasswordForm ? 'email' : 'providers'),
        isProvidersLoginType = loginType === 'providers',
        rootStyles = styles({ isLoginForm, isSignUpForm, isProvidersLoginType });

    const handleSetLoginType = () => {
        setLoginType(isProvidersLoginType ? 'email' : 'providers');
    };

    const handlePage = (page: string) => () => {
        navigate(page);
    };

    let formFields: React.ReactNode = null;
    if (isLoginForm) {
        formFields = <LoginFields />;
    } else if (isSignUpForm) {
        formFields = <SignUpFields />;
    } else if (isForgotPasswordForm) {
        formFields = <ForgotPasswordFields />;
    }

    return (
        <Box sx={rootStyles}>
            <form className="loginForm" method="post" action="#!">
                {!isProvidersLoginType && !isForgotPasswordForm && (
                    <Typography className="goBackAction" component="div" onClick={handleSetLoginType}>
                        <ArrowBackRoundedIcon />
                        Back
                    </Typography>
                )}

                <LoginTitle title={title} welcomeBackText={welcomeBackText} />

                {isProvidersLoginType ? <LoginProviders formType={formType} /> : formFields}

                {isProvidersLoginType && !isForgotPasswordForm && (
                    <>
                        <LoginOtherOptionLine />
                        <ContinueWithEmailButton formType={formType} onClick={handleSetLoginType} />
                    </>
                )}

                {isLoginForm && isProvidersLoginType && (
                    <div className="termsAndConditions">
                        <Typography className="termsAndConditionsText">Terms & Conditions</Typography>
                        <span>and</span>
                        <Typography className="termsAndConditionsText">Privacy Policy</Typography>
                    </div>
                )}

                {isLoginForm && !isProvidersLoginType && (
                    <Typography component="div" className="alreadyHaveAnAccount">
                        {"Don't"} have an account?
                        <span onClick={handlePage('/sign-up')}>Sign up</span>
                    </Typography>
                )}

                {(isSignUpForm || isForgotPasswordForm) && (
                    <Typography component="div" className="alreadyHaveAnAccount">
                        Already have an account?
                        <span onClick={handlePage('/')}>Login</span>
                    </Typography>
                )}
            </form>
        </Box>
    );
}
