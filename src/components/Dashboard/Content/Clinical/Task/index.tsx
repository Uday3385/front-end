'use client';

import Typography from '@mui/material/Typography';

import DashboardContentSection from '@/src/components/Dashboard/ContentSection';
import TaskCategoryTable from '@/src/components/Tables/TaskCategory';
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
                        title: 'Task Open $$:',
                        content: '$2,825,296',
                        success: true,
                    },
                    {
                        title: '1-5 Days:',
                        content: '32',
                        success: true,
                    },
                    {
                        title: '6-10 Days:',
                        content: '54',
                        error: true,
                    },
                    {
                        title: '11-15 Days:',
                        content: '92',
                        error: true,
                    },
                    {
                        title: '16-30 Days:',
                        content: '64',
                        success: true,
                    },
                    {
                        title: '31+ Days:',
                        content: '75',
                        success: true,
                    },
                ]}
                style={{
                    '& div.plainCard': {
                        width: '176px',
                        height: '95px',

                        '& .plainCardTitle': {
                            justifyContent: 'flex-start',
                            minHeight: '25px',
                        },

                        '& .plainCardContent': {
                            justifyContent: 'flex-start',
                        },
                    },
                }}
            />

            <div style={contentStyle}>
                <div style={stylesObj.graphWrapper}>Graph</div>
                <div style={stylesObj.tableWrapper}>
                    <TaskCategoryTable />
                </div>
            </div>
        </>
    );

    return (
        <DashboardContentSection
            section1={{
                title: '',
                content: renderSection,
                radioButton: { options: constants.CONTENT_DISPLAY_OPTION.accountsDollar, defaultValue: 'Dollar' },
                style: stylesObj.contentSection,
            }}
        />
    );
}
