import { borderColor } from '@/src/theme/colors';

const styles = {
    '& .MuiInputBase-root': {
        margin: '0px',
        padding: 0,
    },

    '& fieldset': {
        display: 'none',
    }, 

    '& button': {
        height: '35px',
        width: '35px',
        borderRadius: '0px',
        margin: '0xp !important',
        borderLeft: `1px solid ${borderColor.main}`,

        '& svg': {
            margin: '0px !important',
        },
    },

    '& input': { display: 'none' },
};

export default styles;
