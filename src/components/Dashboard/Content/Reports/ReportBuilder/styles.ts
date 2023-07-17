const styles = {
    label: {
        width: '170px',
        fontSize: '13px',
        fontWeight: 600,
    },
    inputContainer: {
        marginBottom: '15px',
    },
    fieldsWrapper: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '20px',

        '& .fieldsWrapperLeft, .fieldsWrapperRight': {
            flex: 0.5,
        },
        '& .fieldsWrapperLeft': {
            marginRight: '20px',
        },
        '& .fieldsWrapperRight': {
            marginLeft: '20px',
        },
    },
};

export default styles;
