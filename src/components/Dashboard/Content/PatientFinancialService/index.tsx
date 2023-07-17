'use client';

import dynamic from 'next/dynamic';
import Typography from '@mui/material/Typography';

import PatientFinancialServiceMissedChargesChart from '@/src/components/Charts/PatientFinancialServiceMissedCharges';
import PatientMissedChargesTable from '@/src/components/Tables/PatientMissedCharges';
import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import DashboardContentSection from '@/src/components/Dashboard/ContentSection';
import { useTheme } from '@/src/theme';
import stylesObj from './styles';
import styles from '@/src/styles/dashboard/content';

const DataStatistics = dynamic(() => import('@/src/components/DataStatistics'), { ...getDynamicImportProps() });

export default function PatientFinancialService() {
    const theme = useTheme();

    const renderSection1 = (
        <>
            <Typography style={styles.headerTitleSub({ theme })}>Missed Charges last 30 Days</Typography>
            <PatientMissedChargesTable />

            <div style={styles.graphWrapper(stylesObj.graphWrapper({ theme }))}>
                <div style={stylesObj.graph}>
                    <PatientFinancialServiceMissedChargesChart
                        legend={{ height: 180, width: 90, offsetX: 80 }}
                        subTitle={{ text: 'Days', offsetX: 11 }}
                    />
                </div>

                <div style={stylesObj.graph}>
                    <PatientFinancialServiceMissedChargesChart
                        title="MISSED CHARGES BY AMOUNT"
                        subTitle={{ text: 'Balance Tiering', offsetX: 11 }}
                        series={[18, 659, 1899, 9000, 16904, 37214, 89999]}
                        labels={[
                            '< $25',
                            '$25 - $999.99',
                            '$1,000 - $4,999.99',
                            '$5,000 - $9,999.99',
                            '$10,000 - $19,999.99',
                            '$20,000 - 49,999.99',
                            '$50,000+',
                        ]}
                        colors={['#03C3E9', '#42A5F5', '#64B5F6', '#1976D2', '#90CAF9', '#039BE5', '#0D47A1']}
                        legend={{ height: 180, width: 170 }}
                    />
                </div>
            </div>
        </>
    );

    return (
        <>
        <DataStatistics
                data={[
                    {
                        title: 'Total Errors:',
                        content: '1,753',
                        success: true,
                    },
                    {
                        title: 'Charges Posted:',
                        content: '$6.45',
                        success: true,
                    },
                    {
                        title: 'Revenue Variance:',
                        content: '32.11%',
                        error: true,
                    },
                    {
                        title: 'Error Rate:',
                        content: '6.01%',
                        error: true,
                    },
                    {
                        title: 'Missing Revenue:',
                        content: '1.2M',
                        error: true,
                    },
                    {
                        title: 'Departments Not Signed:',
                        content: '45',
                        success: true,
                    },
                ]}
            />

            <DashboardContentSection
                section1={{
                    title: 'Edits metrics',
                    content: renderSection1,
                    radioButton: { name: 'editMetricsRadioBtn' },
                }}
                section2={{
                    title: 'Top Reasons for Missing Events',
                    content: <></>,
                    radioButton: { name: 'topReasonsRadioBtn' },
                }}
            />
        </>
    );
}
