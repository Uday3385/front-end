import * as React from 'react';
import Typography from '@mui/material/Typography';

import {
    useSetReportDataElementsByDropRegion,
    useReportDataElementsByDropRegion,
    isDraggedElementDroppable,
    useNormalizeDataElements,
    getDropRegionClassNames,
    getDataElementById,
} from '@/src/hooks/useReportBuilder';

import {
    useDraggingOverItem,
    useGetDroppableProps,
    useDroppedItem,
    useDraggedItem,
    useIsDragging,
} from '@/src/hooks/useGlobalDragDrop';

import type { ReportBuilderDropRegion } from '@/src/types';
import { reportBuilderDragDropContext } from '@/src/redux/reducers/reportBuilder';
import DataElement from '@/src/components/Dashboard/Content/Reports/ReportBuilder/DataElements/DataElement';

export default function DropRegion({ dropRegion }: { dropRegion: ReportBuilderDropRegion }) {
    const setReportDataElements = useSetReportDataElementsByDropRegion(dropRegion),
        reportDataElements = useReportDataElementsByDropRegion(dropRegion),
        normalizeDataElements = useNormalizeDataElements(),
        draggingOverItem = useDraggingOverItem(),
        droppedItem = useDroppedItem(),
        draggedItem = useDraggedItem(),
        isDragging = useIsDragging(),
        dropRegionRef = React.useRef<HTMLDivElement | null>(null),
        hasDataElements = reportDataElements?.length > 0,
        isDraggingOverItem = draggingOverItem === dropRegion;

    const droppableProps = useGetDroppableProps({
        contextType: reportBuilderDragDropContext,
        item: {
            id: dropRegion,
        },
        isItemValid: ({ event }) => isDraggedElementDroppable({ draggedItem: draggedItem as string, event }),
    });

    React.useEffect(() => {
        async function addDroppedElementToList() {
            if (!draggedItem || !droppedItem || droppedItem !== dropRegion) return;

            const dataElement = getDataElementById(draggedItem);

            setReportDataElements(reportDataElements.concat(dataElement));

            // Maybe remove the data element from main data elements list
            setTimeout(() => {
                normalizeDataElements();
            }, 2);
        }

        addDroppedElementToList();
    }, [droppedItem]);

    const { dropRegionClassName, boxWrapperClassName } = getDropRegionClassNames({
        isDraggingOverItem,
        hasDataElements,
        dropRegionRef,
        draggedItem,
        isDragging,
        dropRegion,
    });

    const dropItemPlaceholderText = isDraggingOverItem ? 'Drop element' : 'Drag or select data elements here';

    const renderDataElements = hasDataElements
        ? reportDataElements.map((dataElement) => {
              return <DataElement key={dataElement.title} item={{ id: dataElement.title, ...dataElement }} />;
          })
        : dropItemPlaceholderText;

    return (
        <div ref={dropRegionRef} className={boxWrapperClassName}>
            <div className={dropRegionClassName}>
                <Typography component="div" className="dropElementPlaceholder" {...droppableProps}>
                    {renderDataElements}
                </Typography>
            </div>
        </div>
    );
}
