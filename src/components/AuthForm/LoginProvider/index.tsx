import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import type { FormType } from '@/src/components/AuthForm';
import styles from './styles';

export type Provider = 'google' | 'office-365';

export default function LoginProvider({
    formType,
    provider,
    onClick,
    iconUrl,
}: {
    formType: FormType;
    provider: Provider;
    onClick: (e: React.MouseEvent) => void;
    iconUrl: string;
}) {
    const rootStyles = styles({ provider });

    let title = '';
    if (formType === 'login') {
        if (provider === 'google') {
            title = 'Log in with Google';
        } else if (provider === 'office-365') {
            title = 'Log in with Office 365';
        }
    } else if (formType === 'signUp') {
        if (provider === 'google') {
            title = 'Sign up with Google';
        } else if (provider === 'office-365') {
            title = 'Sign up with Office 365';
        }
    }

    return (
        <Button sx={rootStyles} onClick={onClick}>
            <div className="loginProviderIcon">
                <Image src={iconUrl} alt="Google" width={20} height={20} />
            </div>
            <Typography className="loginProviderTitle">{title}</Typography>
        </Button>
    );
}
