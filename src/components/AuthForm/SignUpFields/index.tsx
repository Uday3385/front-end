import Box from '@mui/material/Box';

import LoginEmailInput from '@/src/components/AuthForm/LoginEmailInput';
import LoginButton from '@/src/components/Buttons/LoginButton';
import LoginInput from '@/src/components/Inputs/LoginInput';
import styles from './styles';

export default function SignUpFields() {
    return (
        <Box sx={styles}>
            <div className="fieldRow">
                <LoginInput requiredMarkerMargin="83px" placeholder="First Name" errorLabel="First Name" />
                <LoginInput requiredMarkerMargin="82px" placeholder="Last Name" errorLabel="Last Name" />
            </div>

            <LoginEmailInput />

            <LoginInput requiredMarkerMargin="108px" placeholder="Phone Number" errorLabel="Phone Number" />
            <LoginInput requiredMarkerMargin="65px" placeholder="Hospital" errorLabel="Hospital" />

            <div className="fieldRow fieldRowDepartment">
                <LoginInput requiredMarkerMargin="90px" placeholder="Department" errorLabel="Department" />
                <LoginInput requiredMarkerMargin="42px" placeholder="Role" errorLabel="Role" />
            </div>

            <LoginInput
                requiredMarkerMargin="76px"
                type="password"
                placeholder="Password"
                errorLabel="Password"
                autoComplete="off"
            />
            <LoginInput
                requiredMarkerMargin="116px"
                type="password"
                placeholder="Verify Password"
                errorLabel="Verify Password"
                autoComplete="off"
            />

            <LoginButton>SIGN UP</LoginButton>
        </Box>
    );
}
