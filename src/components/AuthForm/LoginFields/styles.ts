import { primary } from '@/src/theme/colors';

const styles = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '70px',
    marginTop: '-20px',

    '& .rememberMeWrapper': {
        flexGrow: 1,

        '& .MuiFormControlLabel-root': {
            '& span': {
                fontSize: '13px',
                color: '#37474F',
            },

            '& svg': {
                fill: primary.main,
            },
        },
    },

    '& .forgotPasswordText': {
        display: 'flex',
        alignItems: 'center',
        fontSize: '13px',
        color: '#37474F',
        cursor: 'pointer',
        transition: 'all 300ms',

        '&:hover': {
            textDecoration: 'underline',
            fontWeight: 500,
        },
    },
};

export default styles;
