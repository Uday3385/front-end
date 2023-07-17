import * as React from 'react';
import Typography from '@mui/material/Typography';

import { useSetDataElements, useDataElements } from '@/src/hooks/useReportBuilder';
import DataElement from './DataElement';

export default function DataElements() {
    const dataElements = useDataElements(),
        setDataElements = useSetDataElements(),
        dataElementsLen = dataElements.length;

    React.useEffect(() => {
        setDataElements([
            {
                id: 'Admit Date',
                title: 'Admit Date',
            },
            {
                id: 'Billing Type',
                title: 'Billing Type',
            },
            {
                id: 'Current Financial Class',
                title: 'Current Financial Class',
            },
            {
                id: 'Claim Amount',
                title: 'Claim Amount',
            },
            {
                id: 'Claim Number',
                title: 'Claim Number',
            },
            {
                id: 'Claim Type',
                title: 'Claim Type',
            },
            {
                id: 'Edit Amount',
                title: 'Edit Amount',
            },
            {
                id: 'Edit Category',
                title: 'Edit Category',
            },
            {
                id: 'Edit Sub Category',
                title: 'Edit Sub Category',
            },
            {
                id: 'Date',
                title: 'Date',
            },
            {
                id: 'Days Since Discharge',
                title: 'Days Since Discharge',
            },
            {
                id: 'Denial Category',
                title: 'Denial Category',
            },
            {
                id: 'Denial Code',
                title: 'Denial Code',
            },
            {
                id: 'Denial Rate',
                title: 'Denial Rate',
            },
            {
                id: 'Department',
                title: 'Department',
            },
        ]);
    }, []);

    const renderDataElements = dataElementsLen ? (
        dataElements.map((dataElement) => {
            return <DataElement key={dataElement.title} item={{ id: dataElement.title, ...dataElement }} />;
        })
    ) : (
        <Typography component="div" className="dataElementEmptyText">
            Empty
        </Typography>
    );

    return (
        <>
            <Typography className="dragDropTitle">Data Elements ({dataElementsLen})</Typography>
            <div className="dragElementsList">{renderDataElements}</div>
        </>
    );
}
