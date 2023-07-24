'use client';

import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';

import DepartmentsWorkOutSignOffTable from '@/src/components/Tables/DepartmentsWorkOutSignOff';
import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import DashboardContentSection from '@/src/components/Dashboard/ContentSection';
import { useTheme } from '@/src/theme';
import stylesObj from './styles';
import styles from '@/src/styles/dashboard/content';

const DataStatistics = dynamic(() => import('@/src/components/DataStatistics'), { ...getDynamicImportProps() });

export default function InternalAudit() {
    const theme = useTheme(); 

    const renderSection1 = (
        <>
            <div style={styles.graphWrapper(stylesObj.graphWrapper({ theme }))}>Graph</div>

            <Typography style={styles.headerTitle({ theme })}>Top Reasons for Missing Events</Typography>
            <div style={styles.graphWrapper(stylesObj.graphWrapper({ theme, style: { marginBottom: '0px' } }))}>
                Graph
            </div>
        </>
    );

    return (
        <>
            <DataStatistics
                data={[
                    {
                        title: 'Open Tasks:',
                        content: '3,753',
                        success: true,
                    },
                    {
                        title: 'Open Tasks $$:',
                        content: '$6.45M',
                        success: true,
                    },
                    {
                        title: 'Department Not Signed:',
                        content: '4%',
                        error: true,
                    },
                    {
                        title: 'Outstanding End-User Audit:',
                        content: '10%',
                        error: true,
                    },
                    {
                        title: 'Outstanding Users Not Reviewed:',
                        content: '86',
                        error: true,
                    },
                    {
                        title: 'Average Task Age:',
                        content: '4',
                        success: true,
                    },
                ]}
            />

            <DashboardContentSection
                section1={{
                    title: 'Aged Tasks',
                    content: renderSection1,
                    radioButton: { name: 'agedTasksRadioBtn' },
                }}
                section2={{
                    title: 'Audit Escalation',
                    radioButton: undefined,
                    content: (
                        <>
                            <div style={styles.graphWrapper(stylesObj.graphWrapper({ theme }))}>Graph</div>

                            <Typography style={styles.headerTitleSub({ theme })}>Departments w/out Signoff</Typography>
                            <DepartmentsWorkOutSignOffTable />
                        </>
                    ),
                }}
            />
        </>
    );
}
