import { getPageTitle } from '@/src/utils/env';
import AuthForm from '@/src/components/AuthForm';

export function generateMetadata() {
    return {
        title: getPageTitle('Sign up'),
    };
}

export default function Root() {
    return (
        <AuthForm title="Sign up" formType="signUp" welcomeBackText="Welcome to Clinisys please input your details" />
    );
}
