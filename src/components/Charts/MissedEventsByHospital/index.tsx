'use client';

import { ApexOptions } from 'apexcharts';
import * as React from 'react';
import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import * as constants from '@/src/utils/constants';
import { useTheme } from '@/src/theme';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ...getDynamicImportProps() });

export default function MissedEventsByHospitalChart() {
    const theme = useTheme(),
        rootStyle = { width: '100%' },
        colors = ['#1E88E5', '#1E88E5', '#1976D2', '#1565C0'];

    const formatValue = (val: any) => Math.round(val);

    const [chartState, setCharState] = React.useState({
        series: [2, 9, 27, 66],
        options: {
            noData: constants.NO_CHART_DATA_PROPS,
            chart: {
                type: 'pie',
                height: 310,
                width: 310,
                toolbar: {
                    show: true,
                },
            },
            plotOptions: {
                pie: {
                    offsetY: 60,
                },
            },
            dataLabels: {
                enabled: true,
                // formatter: formatValue,
                style: {
                    fontSize: '12px',
                    fontWeight: 400,
                    fontFamily: 'Roboto',
                    padding: 10,
                },
                color: '#fff',
            },
            colors,
            fill: {
                opacity: 1,
                colors,
            },
            legend: {
                position: 'bottom',
                offsetY: 10,
                show: true,
                height: 100,
                showForSingleSeries: true,
                markers: {
                    fillColors: colors,
                },
                horizontalAlign: 'center',
            },
            labels: ['Hospital A', 'Hospital B', 'Hospital C', 'Hospital D'],
            tooltip: {
                enabled: true,
                fillSeriesColor: true,
            },
        },
    });

    return (
        <ReactApexChart
            options={chartState.options as ApexOptions}
            series={chartState.series}
            height={450}
            style={rootStyle}
            type="pie"
            id="missedEventsByHospitalChart"
        />
    );
}
