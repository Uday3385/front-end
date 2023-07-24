import { borderColor } from '@/src/theme/colors';

const styles = {
    inputLabel: {
        minWidth: '100px',
        fontSize: '13px',
        fontWeight: 700,
        textTransform: 'capitalize' as 'capitalize',
        color: borderColor.greyDarken,
    },
    inputContainer: {
        marginBottom: '20px',
    },
    dateFieldIconStyle: {
        marginLeft: '0px !important',
        marginRight: '-5px !important',
        fontSize: '19px',
    },
    selectDateFieldContainer: {
        '& .MuiSelect-select span': {
            color: `${borderColor.greyDarken} !important`,
        },

        '& .MuiOutlinedInput-root .MuiSvgIcon-root': {
            marginRight: '40px',
            color: borderColor.main,
        },
 
        '& .selectIconBtn': {
            borderLeft: `1px solid ${borderColor.main}`,
            borderRadius: '0px',

            '& .MuiSvgIcon-root': {
                marginLeft: '0px !important',
                marginRight: '0px !important',
            },
        },
    },
};

export default styles;
