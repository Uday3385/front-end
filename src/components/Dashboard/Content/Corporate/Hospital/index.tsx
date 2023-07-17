'use client';

import Typography from '@mui/material/Typography';

import ClinicalDocumentationMissingRevenueIdentifiedChart from '@/src/components/Charts/ClinicalDocumentationMissingRevenueIdentified';
import HighestVarianceRevenueGeneratingHospitalsTable from '@/src/components/Tables/HighestVarianceRevenueGeneratingHospitals';
import LowestVarianceRevenueGeneratingHospitalsTable from '@/src/components/Tables/LowestVarianceRevenueGeneratingHospitals';
import RevenueComparisonByRegionChart from '@/src/components/Charts/RevenueComparisonByRegion';
import { useTheme } from '@/src/theme';
import styles from '@/src/styles/dashboard/content';

export default function Hospital() {
    const theme = useTheme(),
        tableWrapperHeight = { minHeight: '190px' };

    return (
        <>
            <div style={styles.root}>
                <div style={styles.content1()}>
                    <Typography style={styles.headerTitle({ theme })}>Revenue Comparison by Region</Typography>
                    <div style={styles.graphWrapper({ theme })}>
                        <RevenueComparisonByRegionChart />
                    </div>
                </div>

                <div style={styles.content2()}>
                    <Typography style={styles.headerTitle({ theme })}>
                        Clinical Documentation Missing Revenue Identified
                    </Typography>
                    <div style={styles.graphWrapper({ theme })}>
                        <ClinicalDocumentationMissingRevenueIdentifiedChart />
                    </div>
                </div>
            </div>

            <div style={styles.root}>
                <div style={styles.content1(tableWrapperHeight)}>
                    <Typography style={styles.headerTitleSub({ theme })}>
                        Highest Variance Revenue Generating Hospitals
                    </Typography>
                    <HighestVarianceRevenueGeneratingHospitalsTable />
                </div>

                <div style={styles.content2(tableWrapperHeight)}>
                    <Typography style={styles.headerTitleSub({ theme })}>
                        Lowest Variance Revenue Generating Hospitals
                    </Typography>
                    <LowestVarianceRevenueGeneratingHospitalsTable />
                </div>
            </div>
        </>
    );
}
