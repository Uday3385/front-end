import * as React from 'react';

import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import {
    useSetReportDataElementsByDropRegion,
    useSetSelectedDraggedItemsByContext,
    useReportDataElementsByDropRegion,
    useSelectedDraggedItemsByContext,
    getSelectedDraggedItemsWithValue,
    useSelectedDraggedItemContext,
    isDraggedElementDroppable,
    concatDataElementsToList,
    useNormalizeDataElements,
    getDropRegionClassNames,
    getReportDataElementId,
} from '@/src/hooks/useReportBuilder';

import {
    useGetDroppableProps,
    useDraggingOverItem,
    useDroppedItem,
    useDraggedItem,
    useIsDragging,
} from '@/src/hooks/useGlobalDragDrop';

import type { ReportBuilderDragDropContextType } from '@/src/types';
import { reportBuilderDragDropContext } from '@/src/redux/reducers/reportBuilder';
import * as constants from '@/src/utils/constants';
import DataElement from '@/src/components/Dashboard/Content/Reports/ReportBuilder/DataElements/DataElement';
import { DarkTooltip } from '@/src/components/Tooltips/CustomTooltip';

export default function DropRegion({
    multiple = true,
    contextType,
    title,
}: {
    contextType: ReportBuilderDragDropContextType;
    multiple?: boolean;
    title?: React.ReactNode;
}) {
    const setSelectedDraggedItemsByContext = useSetSelectedDraggedItemsByContext(),
        selectedDraggedItemContext = useSelectedDraggedItemContext(),
        setReportDataElements = useSetReportDataElementsByDropRegion(contextType),
        normalizeDataElements = useNormalizeDataElements(),
        selectedDraggedItems = useSelectedDraggedItemsByContext(selectedDraggedItemContext),
        selectedReportItems = useSelectedDraggedItemsByContext(contextType),
        reportDataElements = useReportDataElementsByDropRegion(contextType),
        draggingOverItem = useDraggingOverItem(),
        droppedItem = useDroppedItem(),
        draggedItem = useDraggedItem(),
        isDragging = useIsDragging(),
        selectedDraggedItemsLen = selectedReportItems?.length || 0,
        isDraggingOverItem = draggingOverItem === contextType,
        hasDataElements = reportDataElements?.length > 0;

    const droppableProps = useGetDroppableProps({
        contextType: reportBuilderDragDropContext,
        item: {
            id: contextType,
        },
        isItemValid: ({ event }) =>
            isDraggedElementDroppable({
                draggedItem: draggedItem as string,
                contextType,
                event,
            }),
    });

    React.useEffect(() => {
        async function addDroppedElementToList() {
            if (!draggedItem || !droppedItem || droppedItem !== contextType) return;

            const draggedItems = getSelectedDraggedItemsWithValue({
                draggedItem,
                contextType,
            });

            setReportDataElements(
                concatDataElementsToList({
                    newDataElements: draggedItems,
                    dataElements: multiple ? reportDataElements : [],
                }),
            );

            // Maybe remove the data element from main data elements list
            setTimeout(() => {
                normalizeDataElements();
                setSelectedDraggedItemsByContext({ items: [], context: selectedDraggedItemContext });
            }, 0);
        }

        addDroppedElementToList();
    }, [droppedItem]);

    const handleSelectDataElementAction = (actionType: 'selectAll' | 'unselectAll') => async () => {
        let items: typeof selectedReportItems = [];

        if (actionType === 'selectAll') {
            items = reportDataElements.map((reportDataElement) => getReportDataElementId(reportDataElement));
        }

        setSelectedDraggedItemsByContext({ context: contextType, items });
    };

    const { dropRegionClassName, boxWrapperClassName } = getDropRegionClassNames({
        selectedDraggedItemContext,
        selectedDraggedItems,
        isDraggingOverItem,
        hasDataElements,
        contextType,
        isDragging,
    });

    const dropItemPlaceholderText = isDraggingOverItem ? 'Drop element' : 'Drag or select data elements here';

    const renderDataElements = hasDataElements
        ? reportDataElements.map((dataElement) => {
              return (
                  <DataElement
                      contextType={contextType}
                      multiple={multiple}
                      key={dataElement.title}
                      item={{ id: dataElement.title, ...dataElement }}
                  />
              );
          })
        : dropItemPlaceholderText;

    let renderTitle = title;
    if (renderTitle === undefined) {
        renderTitle = contextType === 'columns' ? 'Columns' : 'Report Prompts';
    }

    return (
        <>
            <Typography component="div" className="dragDropTitle">
                <span className="dragDropTitleText">
                    {renderTitle}

                    {multiple && <>{selectedDraggedItemsLen ? ` (${selectedDraggedItemsLen})` : ''}</>}
                </span>

                {multiple && hasDataElements && (
                    <div className="dragDropTitleBtnWrapper">
                        <DarkTooltip title="Select All" placeholder="top">
                            <IconButton
                                className="checkAllDataElementsBtn"
                                onClick={handleSelectDataElementAction('selectAll')}
                            >
                                <ChecklistRtlOutlinedIcon />
                            </IconButton>
                        </DarkTooltip>
                        <DarkTooltip title="Unselect All" placeholder="top">
                            <IconButton onClick={handleSelectDataElementAction('unselectAll')}>
                                <RuleOutlinedIcon />
                            </IconButton>
                        </DarkTooltip>
                    </div>
                )}
            </Typography>

            <div className={boxWrapperClassName}>
                <div className={dropRegionClassName}>
                    <Typography
                        component="div"
                        className={`dropElementPlaceholder ${constants.REPORT_BUILDER.dragDropContainerClassName}`}
                        {...droppableProps}
                    >
                        {renderDataElements}
                    </Typography>
                </div>
            </div>
        </>
    );
}
