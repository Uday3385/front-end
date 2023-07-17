const styles = {
    inputField: ({ multiline }: { multiline?: boolean } = {}) => ({
        width: '100%',
        '& input': { padding: '10px', fontSize: 14 },
        '& .MuiOutlinedInput-root': { marginTop: 0, height: multiline ? 'auto' : '35px', backgroundColor: '#fff' },
        '& .MuiInputBase-input': {
            backgroundColor: 'transparent !important',
            marginTop: 0,
            fontSize: '14px !important',
            fontWeight: '400 !important',
        },
        '& .MuiInputAdornment-root': {
            '& button svg': {
                width: '21px',
                height: '21px',
            },
        },
    }),
};

export default styles;
