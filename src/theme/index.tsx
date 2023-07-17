import { useMemo } from 'react';

import {
    ThemeProvider as MUIThemeProvider,
    ThemeOptions as MuiThemeOptions,
    Palette as MuiPalette,
    useTheme as useMuiTheme,
    Theme as MuiTheme,
    createTheme,
} from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import createComponents from './createComponents';
import createTypography from './createTypography';
import createPalette from './createPalette';

type ThemeBorderColor = {
    tableColumnMarker: string;
    tableFooterThick: string;
    tableFooter: string;
    lightGrey: string;
    tableHeader: string;
    greyDarken: string;
    tableRow: string;
    default: string;
    light: string;
    main: string;
    dark: string;
};

type Palette = MuiPalette & { borderColor: ThemeBorderColor };

declare module '@mui/material/styles' {
    interface Theme {
        borderColor: ThemeBorderColor;
    }
    interface ThemeOptions {
        borderColor?: ThemeBorderColor;
    }
}

export type Theme = MuiTheme & { palette: Palette };
export type ThemeOptions = MuiThemeOptions & { borderColor: ThemeBorderColor };

export const getThemeOption = <T extends Theme, O extends keyof ThemeOptions>(theme: T, option: O): T[O] =>
    theme[option];

export const useTheme = (): Theme => useMuiTheme();

// setup a cache for our dynamic styles so they will have the nonce attribute attached for CSP
const styledCache = createCache({
    key: 'css',
    // nonce: window.nonce,
    prepend: true,
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const themeMode = 'light',
        isLight = themeMode === 'light',
        direction = 'ltr',
        breakpoints = {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
                collapseMenu: 1280,
            },
        },
        typography = createTypography(),
        palette = createPalette() as Palette,
        components = createComponents({ palette });

    const themeOptions = useMemo(
        () => ({
            breakpoints,
            typography,
            components,
            direction,
            palette,
            shape: { borderRadius: 4 },
        }),
        [isLight, direction],
    );

    const theme = createTheme(themeOptions as MuiThemeOptions);

    return (
        <CacheProvider value={styledCache}>
            <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
        </CacheProvider>
    );
}
