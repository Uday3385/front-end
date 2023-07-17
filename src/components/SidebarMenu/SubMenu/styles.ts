import { Theme } from '@/src/theme';

type StyleProps = {
    theme: Theme;
    isLastItem?: boolean;
    isFirstItem?: boolean;
    hasSubMenu?: boolean;
    isSubMenuVisible?: boolean;
};

type SubMenuProps = { theme: Theme; isNestedMenu?: boolean };

const relativePositioning = 'relative' as 'relative';

const getLineTopPosition = ({ type = 'dot', isFirstItem = false, isLastItem = false, hasSubMenu = false }) => {
    let top = '0px';
    const isDot = type === 'dot';

    if (isLastItem) {
        top = isLastItem ? '-6px' : '0px';
    } else if (isFirstItem) {
        if (!isDot) {
            // top = !isSubMenuVisible ? '15px' : '23px';
            // top = '23px';
            top = hasSubMenu ? '15px' : '23px';
        } else {
            top = hasSubMenu ? '-4px' : '0px';
        }
    }
    return top;
};

const styles = {
    subMenu: ({ theme, isNestedMenu = false }: SubMenuProps) => ({
        width: '100%',
        paddingLeft: isNestedMenu ? '38px' : '33px',
        paddingRight: '10px',
        margin: `-10px 0px ${isNestedMenu ? 0 : 10}px ${isNestedMenu ? 2 : 0}px`,
        borderLeft: isNestedMenu ? `1px solid ${theme.palette.borderColor.main}` : undefined,
    }),
    subMenuWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    subMenuItemBtn: ({ isFirstItem, hasSubMenu }: { isFirstItem: boolean; hasSubMenu?: boolean }) => ({
        display: 'flex',
        marginBottom: isFirstItem && hasSubMenu ? '10px' : '0px',
    }),
    subMenuItemTitle: ({ theme, isNestedMenu }: SubMenuProps) => ({
        fontSize: '13px',
        fontFamily: 'Nunito',
        fontWeight: 700,
        color: theme.palette.secondary.main,
        paddingLeft: isNestedMenu ? '0px' : '15px',
    }),
    dot: ({ theme, isLastItem, isFirstItem, hasSubMenu, isSubMenuVisible }: StyleProps) => {
        return {
            width: '5px',
            height: '5px',
            borderRadius: '5px',
            backgroundColor: isSubMenuVisible ? theme.palette.primary.main : theme.palette.borderColor.main,
            position: relativePositioning,
            top: getLineTopPosition({ isFirstItem, isLastItem, hasSubMenu }),
        };
    },
    line: ({ theme, isLastItem, isFirstItem, hasSubMenu }: StyleProps) => ({
        width: '1px',
        minHeight: isFirstItem || isLastItem ? '18px' : '15px',
        height: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.borderColor.main,
        position: relativePositioning,
        top: getLineTopPosition({ isFirstItem, isLastItem, hasSubMenu, type: 'line' }),
    }),
};

export default styles;
