import { Theme } from '@/src/theme';

const styles = {
    assistCardWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: '5px 0px 0px 0px',

        '& .assistCard': {
            marginBottom: '20px',
            flex: 0.248,
        },

        '& div.assistCard:not(div.assistCard:last-child)': {
            marginRight: '20px',
            marginBottom: '20px',
        },
    },
    searchResourceWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '20px',

        '& .inputLabel': {
            marginRight: '10px',
        },
    },
    divider: ({ theme }: { theme: Theme }) => {
        return {
            width: '100%',
            height: '1px',
            backgroundColor: theme.palette.borderColor.main,
            margin: '10px 0px 20px 0px',
        };
    },
    filters: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',

        '& .selectFieldWrapper': {
            width: '200px',
        },
        '& div.selectFieldWrapper:not(div.selectFieldWrapper:last-child)': {
            marginRight: '20px',
        },
    },
    searchResult: ({ theme }: { theme: Theme }) => ({
        '& .searchPlaceholder': {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            fontSize: '14px',
            letterSpacing: '0.25px',
            color: theme.palette.borderColor.main,
            marginTop: '80px',
        },
    }),
};

export default styles;
