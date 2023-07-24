import { getPageTitle } from '@/src/utils/env';
import AuthForm from '@/src/components/AuthForm';

export function generateMetadata() {
    return {
        title: getPageTitle('Login'),
    };
}

export default function Root() {
    return <AuthForm title="Login" formType="login" welcomeBackText="Welcome back please login to your account" />;
}
