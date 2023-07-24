import { Theme } from '@/src/theme';

const styles = {
    dataElement: ({ theme }: { theme: Theme }) => {
        const borderColor = theme.palette.borderColor.main,
            border = `1px solid ${borderColor}`,
            lightGrey = theme.palette.borderColor.lightGrey,
            greyDarken = theme.palette.borderColor.greyDarken;

        return {
            border: '1px solid #bdbdbd63',
            display: 'inline-flex',
            alignItems: 'center',
            // width: '222px',
            width: '48.2%',
            height: '30px',
            backgroundColor: lightGrey,
            borderRadius: '3px',
            padding: '0px 10px',
            marginBottom: '14px',
            transition: 'all 300ms',
            cursor: 'grab',

            '&:active': {
                '& .draggedItemsCount': {
                    display: 'inline-block',
                },
            },

            '&:hover': {
                borderColor: theme.palette.primary.main,
                '& .dataElementDragIndicator svg': {
                    fill: greyDarken,
                },
            },

            '& .dataElementTitleText': {
                flexGrow: 1,
            },

            '& .draggedItemsCount': {
                display: 'none',
                marginRight: '6px',
                fontSize: '13px',
                fontWeight: 500,
                fontFamily: theme.typography.fontFamily,
            },

            '& .dataElementRibbon': {
                border,
                display: 'block',
                width: '15px',
                height: '15px',
                borderRadius: '100%',
                marginRight: '7px',
                backgroundColor: '#fff',
            },

            '& .dataElementTitle': {
                display: 'flex',
                fontSize: '13px',
                fontFamily: 'inherit',
                color: greyDarken,
                textTransform: 'capitalize',
                flexGrow: 1,
                lineHeight: 1.1,
            },

            '& .dataElementDragIndicator': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: 'auto',
                marginRight: '-3px',

                '& svg': {
                    width: '15px',
                    fill: theme.palette.borderColor.main,
                },
            },

            '& .removeDataElementBtn': {
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                marginRight: '3px',
                borderRadius: '100%',

                '&:hover': {
                    backgroundColor: theme.palette.borderColor.main,
                    color: '#555',
                },

                '& svg': {
                    fontSize: '18px',
                    fill: greyDarken,
                },
            },
        };
    },
};

export default styles;
