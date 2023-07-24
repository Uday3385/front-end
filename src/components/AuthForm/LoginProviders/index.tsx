import type { FormType } from '@/src/components/AuthForm';
import LoginProvider from '@/src/components/AuthForm/LoginProvider';

export default function LoginProviders({ formType }: { formType: FormType }) {
    return (
        <div className="loginWithProviders">
            <LoginProvider provider="google" formType={formType} iconUrl="/icons/google.svg" onClick={() => {}} />

            <LoginProvider
                provider="office-365"
                formType={formType}
                iconUrl="/icons/office-365.svg"
                onClick={() => {}}
            />
        </div>
    );
}
