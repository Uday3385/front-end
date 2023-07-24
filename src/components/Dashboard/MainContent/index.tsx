'use client';

import ContentNavbar, { type ContentNavbarType } from '@/src/components/Dashboard/ContentNavbar';
import { useTheme } from '@/src/theme';
import styles from './styles';

export type MainContentType = {
    transparentBackground?: boolean;
    contentNavbar?: ContentNavbarType;
    children: React.ReactNode;
    style?: React.CSSProperties;
};
 
export default function MainContent({
    transparentBackground = false,
    contentNavbar,
    style = {},
    children,
}: MainContentType) {
    const theme = useTheme(),
        rootStyle = { ...styles.root({ theme, transparentBackground }), ...style };

    return (
        <div style={rootStyle}>
            {contentNavbar && <ContentNavbar {...contentNavbar} />}
            {children}
        </div>
    );
}
 