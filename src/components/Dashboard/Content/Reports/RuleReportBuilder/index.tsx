'use client';

import dynamic from 'next/dynamic';

import ReportInputFields from '@/src/components/Dashboard/Content/Reports/ReportBuilder/ReportInputFields';
import DragDropElements from '@/src/components/Dashboard/Content/Reports/ReportBuilder/DragDropElements';
import stylesProps from '@/src/components/Dashboard/Content/Reports/styles';
import styles from '@/src/styles/dashboard/content';

const ReportElementDrawer = dynamic(() => import('@/src/components/Drawer/ReportElementDrawer'));

export default function RuleReportBuilder() {
    const rootStyle = { ...styles.root, marginBottom: '0px' };

    return (
        <>
            <div style={rootStyle}>
                <div style={styles.content1(stylesProps.wrapper)}>
                    <ReportInputFields />
                    <DragDropElements isRuleReportBuilderPage={true} />
                </div>
            </div>
            <ReportElementDrawer />
        </>
    );
}
