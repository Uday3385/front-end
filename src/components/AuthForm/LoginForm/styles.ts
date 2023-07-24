import { borderColor } from '@/src/theme/colors';

const styles = ({ isLoginForm = true, isSignUpForm = false, isProvidersLoginType = true }) => {
    const greyDarken = borderColor.darkText;

    return {
        margin: '0px',
        width: '100%',
        padding: isSignUpForm && !isProvidersLoginType ? '0px 0px 100px 0px' : '0px',

        '& .loginForm': {
            width: '100%',
            maxWidth: '700px',
            height: isSignUpForm ? '100%' : '560px',
            padding: isSignUpForm || isLoginForm ? '48px 88px' : '81px 88px',
            margin: '0px auto',
            flexShrink: 0,
            borderRadius: '40px',
            background:
                'linear-gradient(0deg, #FFF 0%, #FFF 100%), linear-gradient(123deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.05) 100%)',
            backgroundBlendMode: 'normal, overlay',
            backdropFilter: 'blur(35px)',

            '& .loginTitle': {
                fontSize: '36px',
                fontWeight: 600,
                color: greyDarken,
                display: 'flex',
                flexDirection: 'column',

                '& .welcomeBackText': {
                    fontSize: '14px',
                    fontWeight: 400,
                    marginTop: '10px',
                    color: greyDarken,
                },
            },
        },

        '& .loginWithProviders': {
            width: '100%',
            margin: '20px 0px 0px 0px',
        },

        '& .loginOtherOptionLineWrapper': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '20px',

            '& .loginOtherOptionLine': {
                width: 'calc(50% - 32px)',
                height: '1px',
                background: '#757575',
            },

            '& .loginOtherOptionLineText': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                color: greyDarken,
                fontSize: '14px',
                fontWeight: 700,
            },
        },

        '& .termsAndConditions': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',

            '& .termsAndConditionsText, span': {
                fontSize: '13px',
                color: greyDarken,
            },

            '& .termsAndConditionsText': {
                textDecoration: 'underline',
                transition: 'all 300ms',
                cursor: 'pointer',

                '&:hover': {
                    fontWeight: 500,
                },
            },

            '& span': {
                margin: '0px 8px',
            },
        },

        '& .alreadyHaveAnAccount': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            fontSize: '13px',
            color: greyDarken,

            '& span': {
                marginLeft: '5px',
                textDecoration: 'underline',
                transition: 'all 300ms',
                cursor: 'pointer',
                fontSize: '13px',
                color: greyDarken,

                '&:hover': {
                    fontWeight: 500,
                },
            },
        },

        '& .goBackAction': {
            display: 'flex',
            alignItems: 'center',
            color: greyDarken,
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            marginBottom: '20px',
            transition: 'all 300ms',

            '&:hover': {
                textDecoration: 'underline',
            },

            '& svg': {
                marginRight: '10px',
                fontSize: '20px',
            },
        },
    };
};

export default styles;
