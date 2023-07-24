import * as React from 'react';
import { usePathname } from 'next/navigation';
import Typography from '@mui/material/Typography';

import {
    useNormalizeReportPromptsOrColumnsDataElements,
    useSetSelectedDraggedItemsByContext,
    useReportDataElementsByDropRegion,
    concatDataElementsToListByContext,
    useSelectedDraggedItemsByContext,
    getSelectedDraggedItemsWithValue,
    useSelectedDraggedItemContext,
    useResetReportBuilderStates,
    isDraggedElementDroppable,
    usePopulateDataElements,
    getDropRegionClassNames,
    usePrivateDataElements,
    getPrivateDataElements,
    useSetDataElements,
    useDataElements,
} from '@/src/hooks/useReportBuilder';

import {
    useGetDroppableProps,
    useDraggingOverItem,
    useDraggedItem,
    useDroppedItem,
    useIsDragging,
} from '@/src/hooks/useGlobalDragDrop';

import { reportBuilderDragDropContext } from '@/src/redux/reducers/reportBuilder';
import * as constants from '@/src/utils/constants';
import DataElement from './DataElement';

export default function DataElements({ multiple = true }: { multiple?: boolean }) {
    const contextType = 'dataElements',
        setSelectedDraggedItemsByContext = useSetSelectedDraggedItemsByContext(),
        selectedDraggedItemContext = useSelectedDraggedItemContext(),
        resetReportBuilderStates = useResetReportBuilderStates(),
        normalizeDataElements = useNormalizeReportPromptsOrColumnsDataElements(),
        selectedDraggedItems = useSelectedDraggedItemsByContext(selectedDraggedItemContext),
        selectedDataElements = useSelectedDraggedItemsByContext(contextType),
        populateDataElements = usePopulateDataElements(),
        privateDataElements = usePrivateDataElements(),
        reportDataElements = useReportDataElementsByDropRegion(contextType),
        draggingOverItem = useDraggingOverItem(),
        setDataElements = useSetDataElements(),
        dataElements = useDataElements(),
        droppedItem = useDroppedItem(),
        draggedItem = useDraggedItem(),
        isDragging = useIsDragging(),
        pathName = usePathname(),
        isDraggingOverItem = draggingOverItem === contextType,
        dataElementsLen = dataElements.length,
        hasDataElements = reportDataElements?.length > 0;

    const droppableProps = useGetDroppableProps({
        contextType: reportBuilderDragDropContext,
        item: {
            id: contextType,
        },
        isItemValid: ({ event }) =>
            isDraggedElementDroppable({
                draggedItem: draggedItem as string,
                contextType: contextType,
                event,
            }),
    });

    // Clear the report builder data elements and prompts on tab change
    React.useEffect(() => {
        if (privateDataElements?.length) {
            resetReportBuilderStates({
                dataElements: privateDataElements,
            });
        }
    }, [pathName]);

    React.useEffect(() => {
        async function addDroppedElementToList() {
            if (!draggedItem || !droppedItem || droppedItem !== contextType) return;

            const draggedItems = getSelectedDraggedItemsWithValue({
                draggedItem,
                contextType,
            });

            setDataElements(
                concatDataElementsToListByContext({
                    newDataElements: draggedItems,
                    contextType: selectedDraggedItemContext,
                    dataElements,
                }),
            );

            // Maybe remove the data element from main data elements list
            setTimeout(() => {
                normalizeDataElements({ contextType: selectedDraggedItemContext });
                setSelectedDraggedItemsByContext({ items: [], context: selectedDraggedItemContext });
            }, 0);
        }

        addDroppedElementToList();
    }, [droppedItem]);

    React.useEffect(() => {
        async function setupDataElements() {
            if (getPrivateDataElements()?.length) return;

            populateDataElements([
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
        }
        setupDataElements();
    }, []);

    const { boxWrapperClassName } = getDropRegionClassNames({
        selectedDraggedItemContext,
        selectedDraggedItems,
        isDraggingOverItem,
        hasDataElements,
        contextType,
        isDragging,
    });

    const renderDataElements = dataElementsLen ? (
        dataElements.map((dataElement) => {
            return (
                <DataElement
                    contextType={contextType}
                    multiple={multiple}
                    item={{ id: dataElement.title, ...dataElement }}
                    key={dataElement.title}
                />
            );
        })
    ) : (
        <Typography component="div" className="dataElementEmptyText">
            Empty
        </Typography>
    );

    return (
        <>
            <Typography className="dragDropTitle">
                Data Elements
                {selectedDataElements?.length ? ` (${selectedDataElements.length})` : ''}
            </Typography>
            <div
                className={`dragElementsList ${boxWrapperClassName} ${constants.REPORT_BUILDER.dragDropContainerClassName}`}
                {...droppableProps}
            >
                {renderDataElements}
            </div>
        </>
    );
}
