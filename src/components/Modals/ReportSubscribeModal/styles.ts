import { borderColor } from '@/src/theme/colors';
import type { Theme } from '@/src/theme';

export const inputLabelStyle = {
    minWidth: '180px',
    fontSize: '13px',
    fontWeight: 700,
    textTransform: 'capitalize' as 'capitalize',
    color: borderColor.greyDarken,
};

export const inputContainerStyle = {
    marginBottom: '20px',

    '& .MuiSelect-select span': {
        color: `${borderColor.greyDarken} !important`,
    },
};

const styles = ({ theme }: { theme: Theme }) => {
    const greyDarken = theme.palette.borderColor.greyDarken;

    return {
        inputLabel: inputLabelStyle,
        inputContainer: inputContainerStyle,
        modalStyle: {
            '& .MuiPaper-root': {
                maxWidth: '700px',
                minHeight: '450px',
                width: '100%',
            },

            '& .editDataModalContent': {
                width: '100%',
                padding: '20px',
            },

            '& .radioButtonInput': {
                flexDirection: 'row',

                '& .radioButtonGroup': {
                    marginLeft: '3px',
                },

                '& .MuiFormControlLabel-root': {
                    color: greyDarken,
                },
            },

            '& .checkboxButtonInput': {
                flexDirection: 'column',

                '& .radioButtonGroup': {
                    marginTop: '12px',
                },

                '& .formControlLabel': {
                    marginBottom: '15px',
                    minWidth: '150px',
                },
            }, 
        },
    };
};

export default styles;
