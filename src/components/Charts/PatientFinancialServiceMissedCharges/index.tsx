'use client';

import { ApexOptions } from 'apexcharts';
import * as React from 'react';
import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import * as constants from '@/src/utils/constants';
import { useTheme } from '@/src/theme';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ...getDynamicImportProps() });

type Props = { [key: string]: any };

export default function PatientFinancialServiceMissedChargesChart({
    title = 'TASKS OPEN',
    colors = ['#262626', '#434343', '#5E5E5E', '#777777', '#909090'],
    series = [4, 9, 17, 27, 66],
    labels = ['0-5', '6-10', '11-15', '16-20', '20+'],
    subTitle = {} as Props,
    legend = {} as Props,
}) {
    const theme = useTheme(),
        rootStyle = { width: '100%' };

    const [chartState, setCharState] = React.useState({
        series,
        options: {
            noData: constants.NO_CHART_DATA_PROPS,
            chart: {
                type: 'donut',
                height: 200,
                width: 400,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                donut: {
                    columnWidth: '100%',
                    // endingShape: 'rounded',
                    dataLabels: {
                        position: 'right',
                    },
                    customScale: 1.5,
                },
            },
            dataLabels: {
                enabled: false,
                // formatter: formatValue,
                style: {
                    fontSize: '12px',
                    fontWeight: 400,
                    fontFamily: 'Roboto',
                    // padding: 10,
                },
                color: '#fff',
            },
            colors,
            fill: {
                opacity: 1,
                colors,
            },
            title: {
                text: title,
                align: 'bottom',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '13px',
                    fontWeight: 700,
                    fontFamily: 'Nunito',
                    color: theme.palette.borderColor.greyDarken,
                },
            },
            subtitle: {
                align: 'bottom',
                // offsetX: 85,
                offsetY: 33,
                ...subTitle,
                style: {
                    fontSize: '12px',
                    fontWeight: 700,
                    fontFamily: 'Nunito',
                    color: theme.palette.borderColor.greyDarken,
                },
            },
            legend: {
                position: 'top',
                // offsetY: 30,
                offsetX: 50,
                show: true,
                // height: 180,
                // width: 170,
                showForSingleSeries: true,
                // markers: {
                //     fillColors: colors,
                // },
                horizontalAlign: 'left',
                color: theme.palette.borderColor.greyDarken,
                ...legend,
                style: {
                    fontSize: '12px',
                    fontWeight: 400,
                    fontFamily: 'Nunito',
                },
            },
            labels,
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
            height={500}
            style={rootStyle}
            type="donut"
        />
    );
}
