'use client';

import * as React from 'react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import * as constants from '@/src/utils/constants';
import { useTheme } from '@/src/theme';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ...getDynamicImportProps() });

export default function ClinicalDocumentationMissingRevenueIdentifiedChart() {
    let seriesIndex = -1;
    const theme = useTheme();

    const formatValue = (val: any) => val;

    const [chartState, setCharState] = React.useState({
        series: [
            {
                name: 'Missing Revenue Identified',
                data: [133, 289, 59, 200, 148],
            },
        ],
        options: {
            noData: constants.NO_CHART_DATA_PROPS,
            chart: {
                type: 'bar',
                height: 400,
                stacked: true,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '60%',
                    endingShape: 'rounded',
                    dataLabels: {
                        position: 'top',
                        total: {
                            enabled: true,
                            style: {
                                fontSize: '12px',
                                fontWeight: 400,
                                fontFamily: 'Roboto',
                                color: theme.palette.borderColor.greyDarken,
                            },
                            formatter: function (val: any, w: any) {
                                return `${Math.round(val / 5)}%`;
                                // return (
                                //     w.globals.seriesTotals
                                //         .reduce((a: any, b: any) => {
                                //             return a + b;
                                //         }, 0)
                                //         .toLocaleString() + '%'
                                // );
                            },
                        },
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
                categories: ['Radiology', 'Lab', 'Emergency', 'Surgery', 'Cardiology'],
            },
            yaxis: {
                title: {
                    text: '',
                },
            },
            fill: {
                opacity: 1,
                // colors: ['#0D47A1', '#1565C0', '#1976D2', '#1E88E5', '#42A5F5'],
                colors: [
                    () => {
                        ++seriesIndex;
                        switch (seriesIndex) {
                            case 0:
                                return '#0D47A1';
                            case 1:
                                return '#1565C0';
                            case 2:
                                return '#1976D2';
                            case 3:
                                return '#1E88E5';
                            case 4:
                                return '#42A5F5';
                        }
                        return '#1976D2';
                    },
                ],
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
