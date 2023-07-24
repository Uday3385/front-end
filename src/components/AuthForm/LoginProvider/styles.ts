import { Provider } from '.';

const styles = ({ provider }: { provider: Provider }) => {
    let backgroundColor = '#fff';
    if (provider === 'google') {
        backgroundColor = '#4F87ED';
    } else if (provider === 'office-365') {
        backgroundColor = '#EA3C00';
    }

    return {
        height: '58px',
        width: '100%',
        borderRadius: '2px',
        display: 'flex',
        alignItems: 'center',
        padding: '3px',
        backgroundColor,
        marginBottom: '20px',
        transition: 'all 300ms',

        '&:hover': {
            backgroundColor,
            opacity: 0.9,
        },

        '& .loginProviderIcon': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '52px',
            width: '52px',
            padding: '16px',
            backgroundColor: '#fff',
            borderRadius: '2px',
        },

        '& .loginProviderTitle': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            fontSize: '14px',
            fontWeight: 700,
            textAlign: 'center',
            color: '#fff',
        },
    };
};

export default styles;
