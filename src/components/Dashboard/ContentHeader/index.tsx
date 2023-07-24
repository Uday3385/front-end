'use client';

import * as React from 'react';

import { useSelectedSidebarMenuItem } from '@/src/hooks/useSidebarMenu';
import { useSetEditModalAction } from '@/src/hooks/useModal';
import NavigationIndicator from '@/src/components/NavigationIndicator';
import DefaultButton from '@/src/components/Buttons/DefaultButton';
import styles from './styles.module.css';

type RenderButton = null | React.ReactElement;
type ButtonRef = HTMLButtonElement | null;

export default function DashboardContentHeader() {
    const selectedMenuItem = useSelectedSidebarMenuItem(),
        setEditModalAction = useSetEditModalAction(),
        isDashboardReportPage = selectedMenuItem?.path?.indexOf('/reports') !== -1;

    React.useEffect(() => {}, []);

    const handleSubscriptionModal = () => {
        if (isDashboardReportPage) {
            setEditModalAction({
                isCustom: true,
                name: 'ReportSubscribeModal',
                open: true,
            });
        }
    };

    let policyButton: RenderButton = null,
        exportButton: RenderButton = <DefaultButton title="Export" iconUrl="/icons/share.svg" />,
        subscribeButton: RenderButton = (
            <DefaultButton
                title="Subscribe"
                iconUrl="/icons/mailbox.svg"
                iconWidth={16}
                iconHeight={14}
                onClick={handleSubscriptionModal}
            />
        ),
        filterButton: RenderButton = (
            <DefaultButton title="Filter" iconUrl="/icons/filter.svg" iconHeight={12} margin="0px" iconWidth={14} />
        );

    if (selectedMenuItem?.title === 'Internal Audit') {
        policyButton = <DefaultButton title="Policy" iconUrl="/icons/info.svg" iconWidth={15} iconHeight={15} />;
    } else if (selectedMenuItem?.paths?.includes('/dashboard/clinical') || isDashboardReportPage) {
        filterButton = null;
    }

    return (
        <div className={styles.contentHeader}>
            <NavigationIndicator />
            <div className={styles.drawLine}></div>

            {policyButton}
            {exportButton}
            {subscribeButton}
            {filterButton}
        </div>
    );
}
