'use client';

import { ApexOptions } from 'apexcharts';
import * as React from 'react';
import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import * as constants from '@/src/utils/constants';
import { useTheme } from '@/src/theme';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ...getDynamicImportProps() });

export default function RevenueComparisonByRegionChart() {
    const theme = useTheme();

    const formatValue = (val: any) => '$' + val;

    const [chartState, setCharState] = React.useState({
        series: [
            {
                name: 'Posted Revenue',
                data: [44, 55, 57, 56],
            },
            {
                name: 'Expected Revenue',
                data: [76, 85, 101, 98],
            },
        ],
        options: {
            noData: constants.NO_CHART_DATA_PROPS,
            chart: {
                type: 'bar',
                height: 400,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '70%',
                    endingShape: 'rounded',
                    dataLabels: {
                        position: 'top',
                    },
                },
            },
            dataLabels: {
                enabled: true,
                formatter: formatValue,
                style: {
                    fontSize: '12px',
                    fontWeight: 400,
                    fontFamily: 'Roboto',
                    padding: 10,
                },
            },
            legend: {
                horizontalAlign: 'left',
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['Region 1', 'Region 2', 'Region 3', 'Region 4'],
            },
            yaxis: {
                title: {
                    text: '',
                },
            },
            fill: {
                opacity: 1,
                colors: ['#0263FF', '#2DC734'],
            },
            tooltip: {
                y: {
                    formatter: formatValue,
                },
            },
            grid: {
                borderColor: theme.palette.borderColor.main,
                strokeDashArray: 3,
                position: 'back',
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 1,
                },
                column: {
                    colors: undefined,
                    opacity: 1,
                },
            },
        },
    });

    return (
        <ReactApexChart
            options={chartState.options as ApexOptions}
            series={chartState.series}
            height={469}
            type="bar"
        />
    );
}
