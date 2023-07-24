import { getPageTitle } from '@/src/utils/env';
import AuthForm from '@/src/components/AuthForm';

export function generateMetadata() {
    return {
        title: getPageTitle('Sign up'),
    };
}

export default function Root() {
    return (
        <AuthForm
            title="Forgot Password"
            formType="forgotPassword"
            welcomeBackText="Welcome back please provide the email address associated with your account"
        />
    );
}
