'use client';

import { AddTableColumn } from '@/src/hooks/useDataTable';
import type { Theme } from '@/src/theme';

const TableColumns = ({ theme, dataTableId }: { theme: Theme; dataTableId: string }) => {
    const medianRevenue = 1067400,
        totalItems = 9;

    return [
        AddTableColumn({
            title: 'Hospital',
            fieldName: 'hospital',
            style: {
                backgroundColor: theme.palette.borderColor.tableFooter,
                borderRight: `1px solid ${theme.palette.borderColor.main} !important`,
            },
        }),
        AddTableColumn({
            title: 'Total Revenue',
            fieldName: 'totalRevenue',
            style: {
                padding: '0px !important',
            },
            renderCallback: ({ row }) => {
                const revenuePercentage = (+`${row.totalRevenue}`.replace(/[^\d]/g, '') / medianRevenue) * totalItems;

                return (
                    <div
                        style={{
                            margin: '0px',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center' as 'center',
                            width: `${revenuePercentage}%`,
                            backgroundColor: theme.palette.borderColor.tableColumnMarker,
                        }}
                    >
                        {row.totalRevenue}
                    </div>
                );
            },
        }),
        AddTableColumn({
            title: 'Total Cost',
            fieldName: 'totalCost',
        }),
        AddTableColumn({
            title: 'Profit',
            fieldName: 'profit',
        }),
        AddTableColumn({
            title: 'Average Daily Census',
            fieldName: 'averageDailyCensus',
        }),
    ];
};

export default TableColumns;
