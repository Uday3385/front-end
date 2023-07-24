const buttonStyle = {
    backgroundColor: '#3A70D4',
    color: '#fff',
    borderRadius: '5px',
    padding: '8px 30px',
    height: '32px',
    textTransform: 'capitalize' as 'capitalize',
    fontSize: '14px',
    lineHeight: '16px',
};

const styles = {
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column' as 'column',
        padding: '30px 80px',
        minHeight: '164px',
    },
    modalTitle: {
        textTransform: 'capitalize' as 'capitalize',
    },
    btnWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
    },
    confirmDeleteBtn: {
        ...buttonStyle,
        marginRight: '20px',
    },
    cancelDeleteBtn: {
        ...buttonStyle,
        backgroundColor: '#BDBDBD',
    },
    confirmationText: {
        textAlign: 'center' as 'center',
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: 600,
        color: '#5F5F5F',
    },
    submitBtnState: {
        '&:disabled': {
            filter: 'opacity(0.7)',
        },
    },
};

export default styles;
