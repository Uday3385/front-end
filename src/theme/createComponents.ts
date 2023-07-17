import {
    createTheme,
    filledInputClasses,
    inputLabelClasses,
    outlinedInputClasses,
    paperClasses,
    tableCellClasses,
} from '@mui/material';
import { Theme } from '@mui/material/styles';

export default function createComponents({ palette }: { palette: Theme['palette'] }) {
    return {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    textTransform: 'none',
                    backgroundColor: 'transparent',
                    color: palette.primary.main,
                    border: 'none',
                },
                sizeSmall: {
                    padding: '6px 16px',
                },
                sizeMedium: {
                    padding: '8px 20px',
                },
                sizeLarge: {
                    padding: '11px 24px',
                },
                textSizeSmall: {
                    padding: '7px 12px',
                },
                textSizeMedium: {
                    padding: '9px 16px',
                },
                textSizeLarge: {
                    padding: '12px 16px',
                },
            },
        },
    };
}
