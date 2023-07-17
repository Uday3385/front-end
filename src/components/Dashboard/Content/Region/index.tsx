'use client';

import Typography from '@mui/material/Typography';

import RegionTotalRevenueByHospitalTable from '@/src/components/Tables/RegionTotalRevenueByHospital';
import RegionServiceLineByHospitalChart from '@/src/components/Charts/RegionServiceLineByHospital';
import RegionRevenueByHospitalTable from '@/src/components/Tables/RegionRevenueByHospital';
import { useTheme } from '@/src/theme';
import styles from '@/src/styles/dashboard/content';

export default function Region() {
    const theme = useTheme(),
        tableWrapperHeight = { minHeight: '190px', flex: 1, marginRight: '0px' };

    return (
        <>
            <div style={styles.root}>
                <div style={styles.content1({ minHeight: '200px' })}>
                    <Typography style={styles.headerTitle({ theme })}>Revenue by Hospital</Typography>
                    <div style={styles.graphWrapper({ theme, minHeight: '200px', border: 'none' })}>
                        <RegionRevenueByHospitalTable />
                    </div>
                </div>

                <div style={styles.content2({ minHeight: '100px' })}>
                    <Typography style={styles.headerTitle({ theme })}>Service Line Revenue</Typography>
                    <div style={styles.graphWrapper({ theme, minHeight: '100px' })}>
                        <RegionServiceLineByHospitalChart />
                    </div>
                </div>
            </div>

            <div style={styles.root}>
                <div style={styles.content1(tableWrapperHeight)}>
                    <Typography style={styles.headerTitleSub({ theme })}>Revenue by Hospital</Typography>
                    <RegionTotalRevenueByHospitalTable />
                </div>
            </div>
        </>
    );
}
