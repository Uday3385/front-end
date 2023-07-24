import { borderColor } from '@/src/theme/colors';

const styles = ({ required = true, value = '', requiredMarkerMargin = '0px' }) => ({
    marginTop: '20px',

    '& .loginInputField': {
        height: '56px',

        '& .MuiOutlinedInput-root': {
            height: '56px',
            paddingLeft: '5px',

            'input::placeholder': {
                color: `${borderColor.darkText} !important`,
                opacity: '1 !important',
            },

            '&::before': {
                content: "'*'",
                width: '1px',
                height: '21px',
                color: '#FF5252',
                display: value?.length || !required ? 'none' : 'inline-block',
                position: 'absolute',
                zIndex: 1,
                marginLeft: requiredMarkerMargin,
            },
        },
    },

    '& .inputFieldContainer': {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',

        '& .MuiFormHelperText-root': {
            width: '100%',
        },
    },
});

export default styles;
