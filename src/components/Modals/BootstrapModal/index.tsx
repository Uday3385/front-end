'use client';

import DialogTitle, { type DialogTitleProps as MuiDialogTitleProps } from '@mui/material/DialogTitle';
import DialogContent, { type DialogContentProps } from '@mui/material/DialogContent';
import DialogActions, { type DialogActionsProps } from '@mui/material/DialogActions';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import Dialog, { type DialogProps } from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

import { useTheme } from '@/src/theme';

type DialogTitleProps = MuiDialogTitleProps & {
    iconButton?: IconButtonProps;
    onClose: (e: React.MouseEvent) => void;
};

const BootstrapDialog = styled(Dialog)(() => ({
    '& .MuiPaper-root': {
        maxWidth: '500px',
        width: '100%',
        borderRadius: '5px',
    },
    '& .MuiDialogContent-root': {
        paddingTop: '20px',
        paddingBottom: '0px',
    },
    '& .MuiDialogActions-root': {
        padding: 0,
    },
}));

export const BootstrapModalTitle = (props: DialogTitleProps) => {
    const theme = useTheme(),
        titleBackgroundColor = theme.palette.secondary.main,
        { children, onClose, sx = {}, iconButton = {}, ...other } = props;

    const style = {
            display: 'flex',
            alignItems: 'center',
            height: '40px',
            m: 0,
            padding: '10px 5px 10px 20px',
            color: '#fff',
            backgroundColor: titleBackgroundColor,
            ...sx,
        },
        titleWrapperStyle = {
            flexGrow: 1,
            flex: 1,
            marginRight: '10px',
            fontSize: '14px',
            lineHeight: '16px',
        },
        iconButtonStyle = {
            color: '#fff',
            backgroundColor: titleBackgroundColor,
            ...(iconButton.sx || {}),
        },
        iconStyle = { fontSize: '19px' };

    return (
        <DialogTitle component="div" {...other} sx={style}>
            <div style={titleWrapperStyle}>{children}</div>

            <IconButton aria-label="close" {...iconButton} onClick={onClose} sx={iconButtonStyle}>
                <CloseIcon style={iconStyle} />
            </IconButton>
        </DialogTitle>
    );
};

export const BootstrapModalContent = ({ children, ...otherProps }: DialogContentProps) => {
    const dialogContentStyle = { paddingBottom: '30px' };
    return (
        <DialogContent
            dividers
            style={dialogContentStyle}
            className="elementScrollBar mappingInfoModalScrollBar  elementScrollBarBorderRadius"
            {...otherProps}
        >
            <DialogContentText tabIndex={-1} component="div">
                {children}
            </DialogContentText>
        </DialogContent>
    );
};

export const BootstrapModalActions = ({ children, ...otherProps }: DialogActionsProps) => {
    const theme = useTheme();

    const dialogActionsStyle = {
        borderTop: '1px solid #D7DCEA',
        padding: '12px 20px !important',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',

        '& .cancelModalAction, .confirmModalAction': {
            display: 'flex',
            alignItems: 'center',

            '& button': {
                backgroundColor: '#fff',
                height: '35px',
                borderRadius: '3px',
                fontWeight: 600,
                fontSize: '13px',
                textTransform: 'uppercase',
                minWidth: '117px',
            },
        },

        '& .cancelModalAction': {
            flexGrow: 1,

            '& button': {
                color: '#555',
                border: `1px solid ${theme.palette.borderColor.main}`,
            },
        },

        '& .confirmModalAction': {
            display: 'flex',
            alignItems: 'center',

            '& button': {
                color: '#fff',
                backgroundColor: theme.palette.primary.main,
            },
        },
    };

    return (
        <DialogActions sx={dialogActionsStyle} {...otherProps}>
            {children}
        </DialogActions>
    );
};

/**
 * Bootstrap Dialog
 */
const CustomBootstrapDialog = ({ open, onClose, children, ...otherProps }: DialogProps) => (
    <BootstrapDialog keepMounted onClose={onClose} open={open} {...otherProps}>
        {children}
    </BootstrapDialog>
);

export default CustomBootstrapDialog;
