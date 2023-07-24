import type { Theme } from '@/src/theme';

const styles = ({ theme }: { theme: Theme }) => {
    return {
        root: {
            width: 'auto',
            height: 'auto',

            '& .MuiPaper-root': {
                width: '400px',
                height: 'calc(100% - 80px)',
                bottom: '10px',
                top: 'auto',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 5px rgb(0 0 0 / 15%)',
                borderRadius: '0px 0px 0px 2px',
            },

            // Title bar
            '& .drawerTitleBar': {
                display: 'flex',
                alignItems: 'center',
                height: '40px',
                width: '100%',
                marginBottom: '20px',
                padding: '0px 15px',
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
                borderRadius: '2px 0px 0px 0px',

                '& .dataElementTitle': {
                    display: 'flex',
                    flexGrow: 1,
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#fff',
                },

                '& .closeDrawerBtn': {
                    height: '30px',
                    width: '30px',
                    marginRight: '-10px',

                    '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.2)',
                    },

                    '& svg': {
                        fill: '#fff',
                        fontSize: '20px',
                    },
                },
            },
        },
        container: {
            padding: '15px',
        },
    };
};

export default styles;
