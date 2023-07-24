import LoginEmailInput from '@/src/components/AuthForm/LoginEmailInput';
import LoginButton from '@/src/components/Buttons/LoginButton';

export default function ForgotPasswordFields() {
    return (
        <>
            <LoginEmailInput />
            <LoginButton>Send</LoginButton>
        </>
    );
}
