import Typography from '@mui/material/Typography';

import type { LoginFormTitle } from '@/src/components/AuthForm';

export default function LoginTitle({ title, welcomeBackText }: LoginFormTitle) {
    return (
        <Typography component="h3" className="loginTitle">
            {title}
            <span className="welcomeBackText">{welcomeBackText}</span>
        </Typography>
    );
}
