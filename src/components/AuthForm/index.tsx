'use client';

import dynamic from 'next/dynamic';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import { useRouter } from '@/src/hooks/useNavigation';
import styles from './styles';
import Logo from '@/src/components/Icons/Logo';

const LoginForm = dynamic(() => import('@/src/components/AuthForm/LoginForm'), {
    ...getDynamicImportProps({ centralize: true }),
});

export type FormType = 'login' | 'signUp' | 'forgotPassword';

export type LoginFormTitle = {
    welcomeBackText: React.ReactNode;
    title: React.ReactNode;
};

export type AuthFormProps = LoginFormTitle & { formType: FormType };

export default function AuthForm({ title, formType, welcomeBackText }: AuthFormProps) {
    const navigate = useRouter(),
        isLoginForm = formType === 'login';

    let formTitle: string = '',
        formPage: string = '/';

    if (isLoginForm) {
        formPage = '/sign-up';
        formTitle = 'SIGN UP';
    } else if (formType === 'signUp' || formType === 'forgotPassword') {
        formTitle = 'LOG IN';
    }

    const handleFormPage = () => {
        navigate(formPage);
    };

    const handleRootPage = () => {
        navigate('/');
    };

    return (
        <Box style={styles.root}>
            <div className="loginWrapper" style={styles.loginWrapper}>
                <div className="loginHeader" style={styles.loginHeader}>
                    <div style={styles.loginHeaderLogoWrapper}>
                        <span style={styles.logo} onClick={handleRootPage}>
                            <Logo />
                        </span>
                    </div>

                    <Typography component="div" className="loginBtnWrapper" style={styles.loginBtnWrapper}>
                        {isLoginForm ? "Don't" : 'Already'} have an account?
                        <Button style={styles.loginBtn} onClick={handleFormPage}>
                            {formTitle}
                        </Button>
                    </Typography>
                </div>

                <LoginForm formType={formType} title={title} welcomeBackText={welcomeBackText} />
            </div>
        </Box>
    );
}
