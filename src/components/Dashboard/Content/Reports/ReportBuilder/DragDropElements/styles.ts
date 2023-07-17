import { Theme } from '@/src/theme';

const styles = ({ theme }: { theme: Theme }) => {
    const borderColor = theme.palette.borderColor.main,
        border = `1px solid ${borderColor}`,
        lightGrey = theme.palette.borderColor.lightGrey,
        greyDarken = theme.palette.borderColor.greyDarken,
        primaryColor = theme.palette.primary.main;

    return {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: 'calc(100vh - 425px)',

        '& .dragElements': {
            flex: 0.45,
            minHeight: 'inherit',
        },

        '& .dragDropTitle': {
            display: 'flex',
            textTransform: 'uppercase',
            marginBottom: '7px',
            fontSize: '13px',
            fontWeight: 700,
            color: theme.palette.borderColor.greyDarken,
        },

        '& .dataElementEmptyText': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 600,
            height: '100%',
            color: theme.palette.borderColor.greyDarken,
        },

        '& .dragElementsList': {
            border,
            minWidth: '100%',
            width: '100%',
            borderRadius: '3px',
            padding: '15px',
            minHeight: 'inherit',
            display: 'block',
            overflow: 'auto',
            // height: 'calc(100vh - 425px)',
            height: 'calc(100% - 28px)',

            '& .dataElement:nth-of-type(odd)': {
                marginRight: '15px',
            },

            // Selected data element
            '& .dataElementSelected': {
                borderColor: primaryColor,
                fontWeight: 600,

                '& .dataElementDragIndicator svg': {
                    fill: greyDarken,
                },
            },
        },

        '& .droppedElements': {
            flex: 0.55,
            minHeight: 'inherit',

            '& .reportPrompts, .reportColumns': {
                height: '50%',
                display: 'flex',
                width: '100%',
            },

            '& .reportColumns': {
                '& .dragDropTitle': {
                    marginTop: '8px',
                },
            },

            '& .dragDropDirection': {
                width: '130px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                '& .dragDropRightArrowBtn': {
                    marginBottom: '10px',
                },
            },

            '& .dragDropRightArrowBtn, .dragDropLeftArrowBtn': {
                border,
                width: '60px',
                height: '30px',
                borderRadius: '3px',
                backgroundColor: lightGrey,

                '& svg': {
                    width: '17px',
                    height: '17px',
                },
            },

            '& .dropBoxRapper': {
                width: '100%',
                flexGrow: 1,
            },

            '& .boxWrapper': {
                border,
                height: 'calc(100% - 35px)',
                borderRadius: '3px',
                padding: '15px',
            },
            '& .boxWrapper.boxWrapperDraggingOverItem:not(.boxWrapperDropDisabled)': {
                border: `2px solid ${primaryColor} !important`,
            },
            '& .boxWrapper.boxWrapperDraggingItem:not(.boxWrapperDropDisabled)': {
                border: `2px dashed ${primaryColor}`,
            },
            '& .boxWrapper.boxWrapperDraggingOverNoElement:not(.boxWrapperDropDisabled)': {
                border: `2px solid ${primaryColor}`,
            },

            '& .dropRegion': {
                height: '100%',
                width: '100%',
                transition: 'all 300ms',
                backgroundColor: lightGrey,
                borderRadius: '3px',
                border: `1.4px dashed ${borderColor}`,
            },

            '& .dropRegion.dropRegionHasList': {
                // minHeight: 'inherit',
                display: 'block',
                overflow: 'auto',
                border: 'none',

                '& .dropElementPlaceholder': {
                    backgroundColor: '#fff',
                    display: 'block',
                    overflow: 'auto',
                },

                '& .dataElement:nth-of-type(odd)': {
                    marginRight: '15px',
                },
            },

            '& .dropRegion.dropOverRegionActive:not(.dropRegionHasList, .dropRegionDropDisabled)': {
                backgroundColor: '#fff',
                borderRadius: '3px',
                border: `2px dashed ${borderColor}`,
            },
            '& .dropRegion.dropOverRegionDragging:not(.dropRegionHasList, .dropRegionDropDisabled)': {
                border: `2px dashed ${borderColor}`,
            },

            '& .dropElementPlaceholder': {
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                color: greyDarken,
            },
        },
    };
};

export default styles;
