import dynamic from 'next/dynamic';

import DashboardMainContent, { type MainContentType } from '@/src/components/Dashboard/MainContent';
import DashboardContentHeader from '@/src/components/Dashboard/ContentHeader';
import type { MenuItemType } from '@/src/types';
import DashboardContentMenu from '@/src/components/Dashboard/ContentMenu';
import styles from './styles.module.css';
import { getDynamicImportProps } from '@/src/utils/dynamicImport';

const RenderChildren = dynamic(() => import('@/src/components/RenderChildren'), {
    ...getDynamicImportProps(),
});

export default function DashboardContainer({
    transparentBackground = false,
    mainContent = {},
    contentMenu,
    children,
}: {
    transparentBackground?: boolean;
    mainContent?: Omit<MainContentType, 'children'>;
    contentMenu?: MenuItemType[];
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            <DashboardContentHeader />
            <DashboardContentMenu menu={contentMenu} />
            <DashboardMainContent {...mainContent} transparentBackground={transparentBackground}>
                <RenderChildren>{children}</RenderChildren>
            </DashboardMainContent>
        </div>
    );
}
