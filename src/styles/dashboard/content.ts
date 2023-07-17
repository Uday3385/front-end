import { Theme } from '@/src/theme';

type ThemeProps = { theme: Theme; style?: React.CSSProperties };
type GraphWrapperProps = { theme: Theme; minHeight?: string; border?: string; style?: React.CSSProperties };
type ContentStyleProps = {
    marginRight?: string;
    minHeight?: string;
    style?: React.CSSProperties;
    type?: string;
    flex?: number;
    theme?: Theme;
};

const headerTitle = ({ theme, style = {} }: ThemeProps) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textTransform: 'uppercase' as 'uppercase',
    marginBottom: '14px',
    fontWeight: 700,
    fontSize: '14px',
    color: theme.palette.borderColor.greyDarken,
    ...style,
});

const contentStyle = ({ type, minHeight, flex = 0.496, marginRight, style = {} }: ContentStyleProps) => {
    const isFirstContent = type === 'content1',
        rightMarginStyle = marginRight || (isFirstContent ? '42px' : '0px');

    return {
        flex,
        display: 'flex',
        flexDirection: 'column' as 'column',
        minHeight: minHeight || '468px',
        backgroundColor: '#fff',
        marginRight: rightMarginStyle,
        ...style,
    };
};

const sectionStyle = (theme?: Theme) => ({
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '16px 23px 40px 23px',
    border: theme ? `1px solid ${theme.palette.borderColor.main}` : undefined,
});

const styles = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '15px 0px 38px 0px',
    },

    content1: ({ minHeight, flex, style, marginRight }: ContentStyleProps = {}) =>
        contentStyle({ type: 'content1', flex, minHeight, marginRight, style }),

    content2: ({ minHeight, flex, style, marginRight }: ContentStyleProps = {}) =>
        contentStyle({ type: 'content2', flex, minHeight, marginRight, style }),

    section1: ({ theme, minHeight, flex, style = {}, marginRight = '20px' }: ContentStyleProps = {}) =>
        contentStyle({
            type: 'content1',
            flex,
            minHeight,
            marginRight,
            style: {
                ...sectionStyle(theme),
                ...style,
            },
        }),

    section2: ({ theme, minHeight, flex, style = {}, marginRight }: ContentStyleProps = {}) =>
        contentStyle({
            type: 'content2',
            flex,
            minHeight,
            marginRight,
            style: {
                ...sectionStyle(theme),
                ...style,
            },
        }),

    graphWrapper: ({ minHeight = '468px', style = {}, theme, border }: GraphWrapperProps) => ({
        minHeight,
        flexGrow: 1,
        borderRadius: '6px',
        border: border || `1px solid ${theme.palette.borderColor.main}`,
        ...style,
    }),
    headerTitle,
    headerSectionTitle: ({ theme, style = {} }: ThemeProps) =>
        headerTitle({
            theme,
            style: {
                marginBottom: '15px',
                ...style,
            },
        }),
    headerTitleSub: ({ theme, style = {} }: ThemeProps) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: '6px',
        fontSize: '13px',
        fontWeight: 700,
        color: theme.palette.borderColor.greyDarken,
        ...style,
    }),
    sectionTitle: {
        flexGrow: 1,
    },
};

export default styles;
