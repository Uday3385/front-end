'use client';

import * as React from 'react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import * as constants from '@/src/utils/constants';
import { useTheme } from '@/src/theme';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ...getDynamicImportProps() });

export default function RegionServiceLineByHospitalChart() {
    let seriesIndex = -1;
    const theme = useTheme(),
        colors = ['#434343', '#5E5E5E', '#777777', '#909090'],
        axisStyle = {
            fontSize: '12px',
            fontFamily: 'Roboto',
            color: theme.palette.borderColor.greyDarken,
            fontWeight: 400,
        },
        categories = ['Surgery', 'Radiology', 'Emergency', 'Lab', 'Pharmacy'],
        secondaryColor = theme.palette.secondary.main,
        serviceLines = [40, 11, 60, 80, 67];

    const formatValue = (val: any) => val;

    const getMarkerStyle = (style: { [key: string]: any } = {}) => {
        return {
            name: 'Expected',
            value: 100,
            strokeHeight: 0,
            strokeWidth: 17,
            strokeLineCap: 'round',
            strokeColor: secondaryColor,
            ...style,
        };
    };

    const seriesData = serviceLines.map((serviceLine, index) => {
        return {
            x: categories[index],
            y: 100,
            goals: [getMarkerStyle({ value: serviceLine })],
        };
    });

    const [chartState, setCharState] = React.useState({
        series: [
            {
                name: 'Service Line Revenue',
                data: seriesData,
            },
        ],
        options: {
            noData: constants.NO_CHART_DATA_PROPS,
            chart: {
                type: 'bar',
                height: 250,
                stacked: true,
                toolbar: {
                    show: true,
                },
            },
            title: {
                text: 'Average',
                align: 'center',
                offsetY: 5,
                style: axisStyle,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    columnWidth: '100%',
                    barHeight: '5%',
                    offsetY: 40,
                    endingShape: 'rounded',
                    dataLabels: {
                        position: 'center',
                        show: false,
                        total: {
                            enabled: true,
                            offsetX: 10,
                            offsetY: 5,
                            style: {
                                fontSize: '12px',
                                fontWeight: 400,
                                fontFamily: 'Roboto',
                                color: theme.palette.borderColor.greyDarken,
                            },
                            formatter: function (val: any, opt: any) {
                                const goal = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals[0];

                                return `${goal.value}%`;

                                // return `${serviceLines[seriesIndex]}%`;
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
                enabled: false,
                formatter: formatValue,
                style: {
                    fontSize: '12px',
                    fontWeight: 400,
                    fontFamily: 'Roboto',
                },
            },
            legend: {
                position: 'right',
                offsetY: 300,
                show: false,
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
                title: {
                    text: undefined,
                    // style: axisStyle,
                },
            },
            yaxis: {
                show: true,
                title: {
                    text: undefined,
                },
            },
            fill: {
                opacity: 1,
                colors: [
                    () => {
                        // ++seriesIndex;
                        // if (colors[seriesIndex]) return colors[seriesIndex];
                        return '#555';
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
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
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
            height={300}
            type="bar"
        />
    );
}
