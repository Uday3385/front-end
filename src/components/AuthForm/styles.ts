import { primary } from '@/src/theme/colors';

const styles = {
    root: {
        width: '100%',
        minHeight: '100vh',
        height: '100%',
        backgroundColor: 'rgba(104, 52, 250, 0.1)',
        backgroundImage: `url(/images/login-background.svg)`,
        backgroundSize: 'cover',
    },

    loginWrapper: {
        width: '100%',
        height: '100%',
        margin: ' 0px auto',
        paddingTop: '30px',
        maxWidth: 'calc(100% - 180px)',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },

    loginHeader: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        height: '60px',
        margin: '0px 0px 58px 0px',
        padding: '0px 30px',
        borderRadius: '99px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: ' 0px 1px 10px 0px rgba(0, 0, 0, 0.10)',
    },
    loginHeaderLogoWrapper: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
    },
    loginBtnWrapper: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
    },
    loginBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30px',
        width: '125px',
        fontSize: '14px',
        fontWeight: 700,
        borderRadius: '3px',
        backgroundColor: primary.main,
        border: 'none',
        color: '#fff',
        marginLeft: '10px',
    },
};

export default styles;
