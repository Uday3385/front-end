import type { FormType } from '@/src/components/AuthForm';
import PrimaryButton from '@/src/components/Buttons/PrimaryButton';
import { useTheme } from '@/src/theme';

export default function ContinueWithEmailButton({
    onClick,
    formType,
}: {
    formType: FormType;
    onClick: (e: React.MouseEvent) => void;
}) {
    const theme = useTheme(),
        style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '58px',
            fontSize: '14px',
            fontWeight: 700,
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: '2px',
            margin: '20px 0px',
        };

    return (
        <PrimaryButton margin="0px" style={style} onClick={onClick}>
            Continue {formType === 'signUp' ? 'Sign up' : ''} with Email
        </PrimaryButton>
    );
}
