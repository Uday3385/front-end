'use client';

import * as React from 'react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import * as constants from '@/src/utils/constants';
import { useTheme } from '@/src/theme';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ...getDynamicImportProps() });

export default function RegionRevenueByHospitalChart() {
    let seriesIndex = -1;
    const theme = useTheme(),
        colors = ['#434343', '#5E5E5E', '#777777', '#909090'],
        axisStyle = { color: theme.palette.borderColor.greyDarken, fontWeight: 400 },
        categories = ['Hospital A', 'Hospital B', 'Hospital C', 'Hospital D'];

    const formatValue = (val: any) => val;

    const [chartState, setCharState] = React.useState({
        series: [
            {
                name: 'Revenue By Hospital',
                data: [457.25, 617.32, 944.69, 175.7],
            },
        ],
        options: {
            noData: constants.NO_CHART_DATA_PROPS,
            chart: {
                type: 'bar',
                height: 400,
                stacked: true,
                toolbar: {
                    show: true,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                    endingShape: 'rounded',
                    dataLabels: {
                        position: 'center',
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
                position: 'right',
                offsetY: 300,
                show: true,
                showForSingleSeries: true,
                customLegendItems: categories,
                markers: {
                    fillColors: colors,
                },
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories,
                title: {
                    text: 'CHS',
                    style: axisStyle,
                },
            },
            yaxis: {
                title: {
                    text: 'Dollars',
                    style: axisStyle,
                    offsetX: 5,
                },
            },
            fill: {
                opacity: 1,
                colors: [
                    () => {
                        ++seriesIndex;
                        if (colors[seriesIndex]) return colors[seriesIndex];
                        return '#909090';
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
