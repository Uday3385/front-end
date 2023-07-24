import type { TextFieldType } from '@/src/components/Inputs/TextField';
import LoginInput from '@/src/components/Inputs/LoginInput';

export default function LoginEmailInput(props: TextFieldType) {
    return (
        <LoginInput
            {...props}
            requiredMarkerMargin="105px"
            placeholder="Email Address"
            errorLabel="Email"
            autoComplete="off"
            type="email"
        />
    );
}
