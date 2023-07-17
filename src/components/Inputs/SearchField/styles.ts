const styles = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '10px 0px 20px 0px',

        '& .MuiFormControl-root': {
            margin: 0,
        },

        '& .MuiOutlinedInput-root': {
            height: '35px',
            borderRadius: '4px',
        },

        '& input': {
            transition: 'all 300ms',
        },

        '& input:focus': {
            marginLeft: '3px',
        },

        '& .clearSearchBtn, .searchBtn': {
            marginRight: '-13px',
            '& svg': {
                fontSize: '19px',
            },
        },

        '& .searchBtn': {
            '& svg': {
                width: '16px',
                height: '16px',
            },
        },
        '& .searchBtn.hasSearchText': {
            marginRight: '-5px',
        },

        '& svg': {
            fontSize: '20px',
        },
    },
};

export default styles;
