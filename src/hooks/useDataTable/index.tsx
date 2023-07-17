import * as React from 'react';
import TableContainer, { TableContainerProps } from '@mui/material/TableContainer';
import Table, { TableProps as MuiTableProps } from '@mui/material/Table';
import TableFooter, { TableFooterProps } from '@mui/material/TableFooter';
import TableBody, { TableBodyProps } from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableHead, { TableHeadProps } from '@mui/material/TableHead';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import { SxProps, TooltipProps } from '@mui/material';
import Paper from '@mui/material/Paper';

import { Theme, useTheme } from '@/src/theme';
import { CustomTooltip } from '@/src/components/Tooltips/CustomTooltip';
import { TooltipType } from '@/src/types';
import * as constants from '@/src/utils/constants';
import styles from './styles';

export type SelectorProps = { row: { [key: string | number]: any }; index: number };
export type SelectorType = ({ row, index }: SelectorProps) => React.ReactNode;

type FooterProps = {
    rowProps?: TableRowProps;
    columns: { item: any; cellProps?: TableCellProps; style?: React.CSSProperties }[];
};

type TableColumn = {
    headerCellStyle?: SxProps;
    rowCellStyle?: SxProps;
    cellProps?: TableCellProps;
    rowProps?: TableRowProps;
    selector: SelectorType;
    style?: React.CSSProperties;
    title: string | React.ReactNode;
    omit?: boolean;
};

type TableProps = {
    tableContainerProps?: TableContainerProps;
    tableHeadRowProps?: TableRowProps;
    tableBodyRowProps?: TableRowProps;
    tableFooterProps?: TableFooterProps;
    tableCellProps?: TableCellProps;
    tableHeadProps?: TableHeadProps;
    tableBodyProps?: TableBodyProps;
    captionProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    tableFooter?: FooterProps;
    tableProps?: MuiTableProps;
    striped?: boolean;
    caption?: React.ReactNode;
    columns: TableColumn[];
    data: { [key: string]: any; rowProps?: TableRowProps; cellProps?: TableCellProps }[];
    sx?: SxProps<Theme>;
};

interface AddTableColumnType extends Omit<TableColumn, 'selector'> {
    renderCallback?: ({ row, index }: SelectorProps) => React.ReactNode;
    tooltipProps?: TooltipProps;
    tooltipType?: TooltipType;
    maxLength?: number;
    fieldName?: string;
    selector?: SelectorType;
}

/**
 * Add table column data.
 */
export const AddTableColumn = ({
    title,
    style,
    selector,
    fieldName,
    tooltipType = 'dark',
    maxLength = -1,
    renderCallback,
    tooltipProps = { title: '', children: <></> },
}: AddTableColumnType): TableColumn => {
    const renderRow = ({ row, index }: SelectorProps) => {
        const field =
                fieldName && row[fieldName] !== undefined && row[fieldName] !== null
                    ? row[fieldName]
                    : constants.LONG_DASH,
            displayCell = renderCallback ? renderCallback({ row, index }) : <>{field}</>;

        if (!tooltipProps) return displayCell;

        const style = { ...styles.description, ...(tooltipProps.style || {}) };

        const customTooltipProps = {
            ...tooltipProps,
            title: tooltipProps.title || displayCell,
            children: undefined,
            style,
        };

        const textLen = maxLength > -1 && typeof field === 'string' ? field?.length : false,
            trimText = textLen ? field.substring(0, maxLength) : displayCell;

        return (
            <CustomTooltip type={tooltipType} {...customTooltipProps}>
                <>{trimText}</>
            </CustomTooltip>
        );
    };

    return {
        title,
        style,
        selector: selector || renderRow,
    };
};

export default function DataTable({
    tableContainerProps = {},
    tableHeadRowProps = {},
    tableBodyRowProps = {},
    tableFooterProps = {},
    tableHeadProps = {},
    tableCellProps = {},
    tableBodyProps = {},
    tableProps = {},
    striped = true,
    captionProps,
    tableFooter,
    caption,
    columns,
    data,
}: TableProps) {
    const theme = useTheme(),
        rowStyle = { '&:last-child td, &:last-child th': { border: 0 }, ...(tableBodyRowProps.sx || {}) },
        tableContainerStyle = {
            border: `1px solid ${theme.palette.borderColor.main}`,
            borderTop: `1px solid ${theme.palette.borderColor.tableHeader}`,
            borderRadius: '3px',
            boxShadow: 'none',
            ...(tableContainerProps.sx || {}),
        },
        tableHeadStyle = {
            backgroundColor: theme.palette.borderColor.tableHeader,
            '& th': {
                fontSize: '13px',
                fontWeight: 700,
                lineHeight: 1.5,
                color: '#fff',
                paddingTop: '12px',
                paddingBottom: '12px',
            },
            ...(tableHeadProps.sx || {}),
        },
        tableBodyStyle = {
            '& tr th, tr td': {
                fontSize: '13px',
                lineHeight: 1.3,
                paddingTop: '9px',
                paddingBottom: '9px',
                borderBottom: `1px solid ${theme.palette.borderColor.main}`,
            },
            ...(tableBodyProps.sx || {}),
        },
        tableFooterRowStyle = {
            backgroundColor: theme.palette.borderColor.tableFooter,
            borderTop: `1px solid ${theme.palette.borderColor.main}`,
        };

    const renderHeaders = columns.map((column, index) => {
        if (column.omit) return null;

        const cellProps = column.cellProps ? column.cellProps : {},
            colStyle = column.headerCellStyle ? column.headerCellStyle : {};

        if (index < 1) {
            return (
                <TableCell key={index} {...cellProps} sx={colStyle}>
                    {column.title}
                </TableCell>
            );
        } else {
            return (
                <TableCell key={index} {...tableCellProps} {...cellProps} sx={colStyle}>
                    {column.title}
                </TableCell>
            );
        }
    });

    const renderRows = data.map((row, index) => {
        const columnsList: React.ReactNode[] = [],
            rowProps = row.rowProps ? row.rowProps : {};

        for (const columnIndex in columns) {
            const column = columns[columnIndex];

            if (!column.selector) {
                throw new Error(
                    `Column ${columnIndex} {selector({row, index} => React.ReactNode): SelectorType} must be defined`,
                );
            }

            const renderCell = column.selector({ row, index }),
                cellProps = row.cellProps ? row.cellProps : {},
                colStyle = column.style ? column.style : {},
                rowStyle = column.rowCellStyle ? column.rowCellStyle : {};

            let cell;
            if (!columnsList.length) {
                cell = (
                    <TableCell
                        key={columnIndex}
                        component="th"
                        scope="row"
                        sx={rowStyle}
                        style={colStyle}
                        {...cellProps}
                    >
                        {renderCell}
                    </TableCell>
                );
            } else {
                cell = (
                    <TableCell key={columnIndex} {...tableCellProps} sx={colStyle} {...cellProps}>
                        {renderCell}
                    </TableCell>
                );
            }

            columnsList.push(cell);
        }

        const strippedBackground = index % 2 === 1 ? theme.palette.borderColor.tableRow : '#fff',
            strippedStyle = {
                backgroundColor: striped ? strippedBackground : undefined,
            };

        return (
            <TableRow key={index} hover={true} {...tableBodyRowProps} {...rowProps} sx={rowStyle} style={strippedStyle}>
                {columnsList}
            </TableRow>
        );
    });

    const footerColumns = tableFooter?.columns
        ? tableFooter.columns.map((col, index) => {
              const cellProps = col.cellProps ? col.cellProps : {},
                  cellStyle = col.style ? col.style : {},
                  firstCellStyle = index < 1 ? { fontWeight: 700, ...cellStyle } : cellStyle;

              return (
                  <TableCell key={index} align="left" style={firstCellStyle} {...cellProps}>
                      {col.item}
                  </TableCell>
              );
          })
        : null;

    const tableFooterRowProps = tableFooter?.rowProps ? tableFooter?.rowProps : {};

    const renderTable = (
        <TableContainer component={Paper} {...tableContainerProps} sx={tableContainerStyle}>
            <Table size="small" {...tableProps}>
                {caption ? <caption {...captionProps}>{caption}</caption> : null}
                <TableHead {...tableHeadProps} sx={tableHeadStyle}>
                    <TableRow {...tableHeadRowProps}>{renderHeaders}</TableRow>
                </TableHead>
                <TableBody {...tableBodyProps} sx={tableBodyStyle}>
                    {renderRows}
                </TableBody>

                {tableFooter ? (
                    <TableFooter {...tableFooterProps}>
                        <TableRow style={tableFooterRowStyle} {...tableFooterRowProps}>
                            {footerColumns}
                        </TableRow>
                    </TableFooter>
                ) : null}
            </Table>
        </TableContainer>
    );

    return renderTable;
}
