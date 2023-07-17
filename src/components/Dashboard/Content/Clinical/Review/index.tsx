'use client';

import Typography from '@mui/material/Typography';

import DashboardContentSection from '@/src/components/Dashboard/ContentSection';
import PatientsListTable from '@/src/components/Tables/PatientsList';
import DataStatistics from '@/src/components/DataStatistics';
import * as constants from '@/src/utils/constants';
import { useTheme } from '@/src/theme';
import stylesObj from '../styles';
import styles from '@/src/styles/dashboard/content';

export default function Task() {
    const theme = useTheme(),
        contentStyle = stylesObj.contentStyle({ theme });

    const renderSection = (
        <>
            <DataStatistics
                size="small"
                data={[
                    {
                        title: 'Revenue:',
                        content: (
                            <div style={stylesObj.revenueStats}>
                                <span>$7,509,876</span>
                                <span style={stylesObj.revenueStatsColor({ theme })}>$4,826,406</span>
                            </div>
                        ),
                        success: true,
                        titleStyle: {
                            justifyContent: 'flex-start',
                        },
                        contentStyle: {
                            justifyContent: 'flex-start',
                        },
                    },
                    {
                        title: 'Clinical Events Outside of Admit/Discharge Date:',
                        content: '$6.45M',
                        success: true,
                    },
                    {
                        title: 'Clinical Threshold Events:',
                        content: '4%',
                        error: true,
                    },
                    {
                        title: 'Charges Posted with No Clinical Event:',
                        content: '10%',
                        error: true,
                    },
                    {
                        title: 'Late Charges:',
                        content: '4',
                        success: true,
                    },
                ]}
            />

            <div style={contentStyle}>
                <div style={stylesObj.graphWrapper}>Graph</div>
                <div style={stylesObj.tableWrapper}>
                    <Typography style={styles.headerTitleSub({ theme })}>Patient List</Typography>
                    <PatientsListTable />
                </div>
            </div>
        </>
    );

    return (
        <DashboardContentSection
            section1={{
                title: 'Radiology - CT',
                content: renderSection,
                radioButton: { options: constants.CONTENT_DISPLAY_OPTION.accountsDollar, defaultValue: 'Dollar' },
                style: stylesObj.contentSection,
            }}
        />
    );
}
