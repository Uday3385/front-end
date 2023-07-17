const styles = {
    title: {
        color: '#3261B7',
        fontSize: '13px',
        textDecoration: 'underline',
        lineHeight: '13px',
        cursor: 'pointer',
        transition: 'text-description 300ms',
        whitespace: 'initial',
    },
    titleState: {
        '&:hover': {
            textDecorationThickness: '1.5px !important',
        },
    },
    description: {
        fontSize: '13px',
        lineHeight: '15px',
        color: '#000',
        maxHeight: '100px',
        overflow: 'hidden',
        whiteSpace: 'initial' as 'initial',
    },
    actionButtonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        minWidth: 95,
        zIndex: 99999,
    },
    iconButton: {
        width: '30px',
        height: '30px',
        position: 'relative' as 'relative',
        // left: '-5px',
    },
    icon: {
        fontSize: '18px',
    },
    toggleTableBtn: {
        minWidth: '1px',
        // maxWidth: '1px',
    },
};

export default styles;
