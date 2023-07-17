'use client';

import Typography from '@mui/material/Typography';

import RegionRevenueByHospitalChart from '@/src/components/Charts/RegionRevenueByHospital';
import MissedEventsByHospitalChart from '@/src/components/Charts/MissedEventsByHospital';
import RevenueByServiceLineTable from '@/src/components/Tables/RevenueByServiceLine';
import RevenueByHospitalTable from '@/src/components/Tables/RevenueByHospital';
import { useTheme } from '@/src/theme';
import styles from '@/src/styles/dashboard/content';

export default function Division() {
    const theme = useTheme(),
        tableWrapperHeight = { minHeight: '190px' };

    return (
        <>
            <div style={styles.root}>
                <div style={styles.content1()}>
                    <Typography style={styles.headerTitle({ theme })}>Missed Events by Hospital</Typography>
                    <div style={styles.graphWrapper({ theme, minHeight: '486px' })}>
                        <MissedEventsByHospitalChart />
                    </div>
                </div>

                <div style={styles.content2()}>
                    <Typography style={styles.headerTitle({ theme })}>Revenue by Hospital</Typography>
                    <div style={styles.graphWrapper({ theme })}>
                        <RegionRevenueByHospitalChart />
                    </div>
                </div>
            </div>

            <div style={styles.root}>
                <div style={styles.content1(tableWrapperHeight)}>
                    <Typography style={styles.headerTitleSub({ theme })}>Revenue by Service Line</Typography>
                    <RevenueByServiceLineTable />
                </div>

                <div style={styles.content2(tableWrapperHeight)}>
                    <Typography style={styles.headerTitleSub({ theme })}>Revenue by Hospital</Typography>
                    <RevenueByHospitalTable />
                </div>
            </div>
        </>
    );
}
