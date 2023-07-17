'use client';

import React from 'react';

import { TableColumn as RDT_TableColumn, TableRow } from 'react-data-table-component';
import { TooltipProps } from '@mui/material';
import Typography from '@mui/material/Typography';

import { CustomTooltip } from '@/src/components/Tooltips/CustomTooltip';
import { TooltipType } from '@/src/types';

type TableRowIndex = keyof TableRow;
type RenderCallback = (row: any) => React.ReactNode;
type RenderTableCell = { row: any; fieldName: string; renderCallback?: RenderCallback };

type TableColumn = RDT_TableColumn<any> & {
    fieldName?: TableRowIndex;
};

type AddTableColumn = TableColumn & {
    maxLength?: number;
    tooltipType?: TooltipType;
    tooltipProps?: TooltipProps;
    renderCallback?: RenderCallback;
};

export const tableStyles = {
    title: {
        color: '#3261B7',
        fontSize: '13px',
        textDecoration: 'underline',
        lineHeight: '13px',
        cursor: 'pointer',
        transition: 'text-description 300ms',
        whitespace: 'initial',
    },
    titleState: {
        '&:hover': {
            textDecorationThickness: '1.5px !important',
        },
    },
    description: {
        fontSize: '13px',
        lineHeight: '15px',
        color: '#000',
        maxHeight: '100px',
        overflow: 'hidden',
        whiteSpace: 'initial' as 'initial',
    },
    actionButtonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        minWidth: 95,
        zIndex: 99999,
    },
    iconButton: {
        width: '30px',
        height: '30px',
        position: 'relative',
        // left: '-5px',
    },
    icon: {
        fontSize: '18px',
    },
    toggleTableBtn: {
        minWidth: '1px',
        // maxWidth: '1px',
    },
};

/**
 * Render table cell using callback
 */
const renderCell = ({ row, fieldName, renderCallback }: RenderTableCell) => {
    if (!renderCallback) {
        return row[fieldName] || '';
    }
    return renderCallback(row);
};
