import { useDispatch, useSelector } from 'react-redux';

import type {
    ReportBuilderReportPromptsOrColumns,
    ReportBuilderDragDropContextType,
    ReportBuilderSelectedDragItems,
    DropRegionClassNames,
    ReportBuilderState,
} from '@/src/types';

import {
    setSelectedDraggedItemsByContext,
    setSelectedDraggedItemContext,
    setReportColumnsDataElements,
    setReportPromptDataElements,
    resetReportBuilderStates,
    setSelectedDraggedItems,
    setPrivateDataElements,
    populateDataElements, 
    setDataElements,
} from '@/src/redux/reducers/reportBuilder';

import type { Item, DragEventType } from '@/src/hooks/useGlobalDragDrop';
import type { RootState } from '@/src/redux/store';
import { getStoreState } from '@/src/hooks/useStore';

type ConcatDataElements = {
    newDataElements: ReportBuilderState['dataElements'];
    dataElements: ReportBuilderState['dataElements'];
};

export const getReportDataElementId = (item?: Item) => item?._id || item?.id || '';

export const getReportDataElementStateByContext = (contextType: ReportBuilderDragDropContextType) => {
    let stateName: keyof ReportBuilderState = 'dataElements';

    if (contextType === 'columns') {
        stateName = 'reportColumnDataElements';
    } else if (contextType === 'reportPrompts') {
        stateName = 'reportPromptDataElements';
    }

    return stateName;
};

export const getDataElements = (): ReportBuilderState['dataElements'] =>
    getStoreState({ storeName: 'reportBuilder', stateName: 'dataElements' });

export const getPrivateDataElements = (): ReportBuilderState['_dataElements'] =>
    getStoreState({ storeName: 'reportBuilder', stateName: '_dataElements' });

export const getSelectedDraggedItemContext = () => {
    const selectedDragItemContext: ReportBuilderDragDropContextType = getStoreState({
        storeName: 'reportBuilder',
        stateName: 'selectedDraggedItemContext',
    });
    return selectedDragItemContext;
};

export const getSelectedDraggedItemsByContext = (context: ReportBuilderDragDropContextType) => {
    const selectedDraggedItems: ReportBuilderSelectedDragItems = getStoreState({
        storeName: 'reportBuilder',
        stateName: 'selectedDraggedItems',
    })?.[context];

    return selectedDraggedItems;
};

export const getReportDataElementsByContext = (contextType: ReportBuilderDragDropContextType) => {
    const stateName = getReportDataElementStateByContext(contextType);

    const dataElements: ReportBuilderReportPromptsOrColumns = getStoreState({
        storeName: 'reportBuilder',
        stateName,
    });

    return dataElements;
};

export const useDataElements = () => {
    const dataElements = useSelector((state: RootState) => state.reportBuilder.dataElements);
    return dataElements;
};

export const usePrivateDataElements = () => {
    const dataElements = useSelector((state: RootState) => state.reportBuilder._dataElements);
    return dataElements;
};

export const useSelectedDraggedItemsByContext = (context: ReportBuilderDragDropContextType) => {
    const dataElements = useSelector((state: RootState) => state.reportBuilder.selectedDraggedItems[context]);
    return dataElements;
};

export const useSelectedDraggedItemContext = () => {
    const context = useSelector((state: RootState) => state.reportBuilder.selectedDraggedItemContext);
    return context;
};

export const useReportDataElementsByDropRegion = (contextType: ReportBuilderDragDropContextType) => {
    const stateName = getReportDataElementStateByContext(contextType);

    const dataElements = useSelector(
        (state: RootState) => state.reportBuilder[stateName],
    ) as ReportBuilderReportPromptsOrColumns;

    return dataElements;
};

export const useSetDataElements = () => {
    const dispatch = useDispatch();

    return (dataElements: ReportBuilderState['dataElements']) => {
        dispatch(setDataElements(dataElements));
    };
};

export const usePopulateDataElements = () => {
    const dispatch = useDispatch();

    return (dataElements: ReportBuilderState['dataElements']) => {
        dispatch(populateDataElements(dataElements));
    };
};

export const useSetPrivateDataElements = () => {
    const dispatch = useDispatch();

    return (dataElements: ReportBuilderState['_dataElements']) => {
        dispatch(setPrivateDataElements(dataElements));
    };
};

export const useSetSelectedDraggedItems = () => {
    const dispatch = useDispatch();

    return (dataElements: ReportBuilderState['selectedDraggedItems']) => {
        dispatch(setSelectedDraggedItems(dataElements));
    };
};

export const useResetReportBuilderStates = () => {
    const dispatch = useDispatch();

    return ({ dataElements}: {dataElements: ReportBuilderState['dataElements']}) => {
        dispatch(resetReportBuilderStates({dataElements}));
    }; 
};

export const useSetSelectedDraggedItemContext = () => {
    const dispatch = useDispatch();

    return (context: ReportBuilderState['selectedDraggedItemContext']) => {
        dispatch(setSelectedDraggedItemContext(context));
    };
};

export const useSetSelectedDraggedItemsByContext = () => {
    const dispatch = useDispatch();

    return ({
        context,
        items,
    }: {
        context: ReportBuilderDragDropContextType;
        items: ReportBuilderState['selectedDraggedItems'][ReportBuilderDragDropContextType];
    }) => {
        let selectedItems: ReportBuilderState['selectedDraggedItems'] = {};

        if (context) {
            selectedItems = {
                [context]: items,
            };
        }

        dispatch(setSelectedDraggedItems(selectedItems));
    };
};

export const useSetReportDataElementsByDropRegion = (contextType: ReportBuilderDragDropContextType) => {
    const dispatch = useDispatch();

    return (dataElements: ReportBuilderState['reportColumnDataElements']) => {
        if (contextType === 'columns') {
            dispatch(setReportColumnsDataElements(dataElements));
        } else if (contextType === 'reportPrompts') {
            dispatch(setReportPromptDataElements(dataElements));
        }
    };
};

/**
 * Remove data elements in DataElement list when present in Report Prompts and Columns.
 */
export const useNormalizeDataElements = () => {
    const dispatch = useDispatch();

    return () => {
        const { dataElements, reportColumnDataElements, reportPromptDataElements }: ReportBuilderState = getStoreState({
            storeName: 'reportBuilder',
        });

        const newDataElements = [];
        for (const dataElement of dataElements) {
            const hasDataElementInReportPrompts = reportPromptDataElements.find(
                (item) => getReportDataElementId(item) === getReportDataElementId(dataElement),
            );

            const hasDataElementInReportColumns = reportColumnDataElements.find(
                (item) => getReportDataElementId(item) === getReportDataElementId(dataElement),
            );

            if (hasDataElementInReportPrompts && hasDataElementInReportColumns) {
                continue;
            }

            newDataElements.push(dataElement);
        }

        dispatch(setDataElements(newDataElements));
    };
};

/**
 * Remove data elements in Report Prompts/Columns DataElement list when data element is
 * dragged back into the DataElement list.
 */
export const useNormalizeReportPromptsOrColumnsDataElements = () => {
    const dispatch = useDispatch();

    return ({
        dataElementsToRemove,
        contextType,
    }: {
        contextType: ReportBuilderDragDropContextType;
        dataElementsToRemove?: string[];
    }) => {
        const states: ReportBuilderState = getStoreState({
            storeName: 'reportBuilder',
        });

        const draggedItems = dataElementsToRemove?.length
                ? dataElementsToRemove
                : states.selectedDraggedItems[contextType] || [],
            reportPromptsOrColumnsDataElements = states[getReportDataElementStateByContext(contextType)];

        const newDataElements = reportPromptsOrColumnsDataElements.filter(
            (item) => !draggedItems.includes(getReportDataElementId(item)),
        );

        const setReportDataElementsFunc =
            contextType === 'reportPrompts' ? setReportPromptDataElements : setReportColumnsDataElements;

        dispatch(setReportDataElementsFunc(newDataElements));
    };
};

const isDataElementInReportBuilderDropRegion = ({
    selectedDraggedItems,
    contextType,
}: {
    selectedDraggedItems: ReportBuilderSelectedDragItems;
    contextType: ReportBuilderDragDropContextType;
}) => {
    let stateName: keyof ReportBuilderState = 'dataElements';

    if (contextType === 'columns') {
        stateName = 'reportColumnDataElements';
    } else if (contextType === 'reportPrompts') {
        stateName = 'reportPromptDataElements';
    }

    const reportDataElements: ReportBuilderSelectedDragItems = getStoreState({
        storeName: 'reportBuilder',
        fallbackValue: [],
        stateName,
    });

    if (!reportDataElements?.length || !selectedDraggedItems?.length) return false;

    let dataElemExistsCount = 0;
    for (const selectedDraggedItem of selectedDraggedItems) {
        if (reportDataElements.find((dataElem) => getReportDataElementId(dataElem) === selectedDraggedItem)) {
            ++dataElemExistsCount;
        }
    }

    return dataElemExistsCount ? dataElemExistsCount === selectedDraggedItems?.length : false;
};

export const getDataElementById = (id: string) => {
    const dataElements = getDataElements();
    return dataElements.find((item) => getReportDataElementId(item) === id);
};

export const getDropRegionClassName = (contextType: ReportBuilderDragDropContextType) => `dropRegion-${contextType}`;

export const getDataElementClassName = (dataElementId: string) =>
    `dataElement-${dataElementId.trim().replace(/[ ]/g, '-')}`;

export const getDropRegionClassNames = ({
    selectedDraggedItemContext,
    selectedDraggedItems,
    isDraggingOverItem,
    hasDataElements,
    contextType,
    isDragging,
}: DropRegionClassNames) => {
    let dropRegionClassName = `dropRegion ${getDropRegionClassName(contextType)}`,
        boxWrapperClassName = 'boxWrapper dragDropBoxWrapper';

    if (
        isDataElementInReportBuilderDropRegion({ contextType, selectedDraggedItems }) ||
        contextType === selectedDraggedItemContext
    ) {
        dropRegionClassName += ' dropRegionDropDisabled';
        boxWrapperClassName += ' boxWrapperDropDisabled';
    }

    // dropRegionClassName
    if (isDraggingOverItem) {
        dropRegionClassName += ' dropOverRegionActive';
    }
    if (isDragging) {
        dropRegionClassName += ' dropOverRegionDragging';
    }
    if (hasDataElements) {
        dropRegionClassName += ' dropRegionHasList';
    }

    // boxWrapperClassName
    if (isDraggingOverItem && hasDataElements) {
        boxWrapperClassName += ' boxWrapperDraggingOverItem';
    }
    if (isDragging && hasDataElements) {
        boxWrapperClassName += ' boxWrapperDraggingItem';
    }
    if (isDraggingOverItem && !hasDataElements) {
        boxWrapperClassName += ' boxWrapperDraggingOverNoElement';
    }
    if (isDragging && !hasDataElements && !isDraggingOverItem) {
        boxWrapperClassName += ' boxWrapperDraggingNoElement';
    }

    return {
        dropRegionClassName,
        boxWrapperClassName,
    };
};

export const getSelectedDraggedItems = (contextType: ReportBuilderDragDropContextType) => {
    const selectedDragItemContext = getSelectedDraggedItemContext();

    if (!selectedDragItemContext) return [];
    if (contextType === selectedDragItemContext) return [];

    return getSelectedDraggedItemsByContext(selectedDragItemContext) || [];
};

export const isDraggedElementDroppable = ({
    contextType,
}: {
    draggedItem: string;
    contextType: ReportBuilderDragDropContextType;
    event: DragEventType;
}) => {
    const selectedDragItemContext = getSelectedDraggedItemContext();

    if (!selectedDragItemContext) return false;
    if (contextType === selectedDragItemContext) return false;

    const selectedDraggedItems = getSelectedDraggedItems(contextType);

    const contextTypes: ReportBuilderDragDropContextType[] = ['columns', 'dataElements', 'reportPrompts'];

    for (const elemContextType of contextTypes) {
        if (elemContextType === selectedDragItemContext || elemContextType !== contextType) continue;

        if (
            isDataElementInReportBuilderDropRegion({
                selectedDraggedItems,
                contextType: elemContextType,
            })
        ) {
            return false;
        }
    }

    return true;
};

export const useHandleSelectedDraggedItemsByContext = () => {
    const dispatch = useDispatch();

    return ({
        multiple = true,
        dataElementId,
        isDragStart,
        context,
    }: {
        dataElementId: string;
        isDragStart?: boolean;
        multiple?: boolean;
        context: ReportBuilderDragDropContextType;
    }) => {
        let items = getSelectedDraggedItemsByContext(context) || [];

        const dataElementExists = items.includes(dataElementId);

        if (multiple) {
            if (!isDragStart) {
                items = dataElementExists
                    ? items.filter((itemId: string) => itemId !== dataElementId)
                    : items.concat(dataElementId);
            } else {
                items = dataElementExists ? items : items.concat(dataElementId);
            }
        } else {
            items = [dataElementId];
        }

        dispatch(
            setSelectedDraggedItemsByContext({
                context,
                items,
            }),
        );
    };
};

export const concatDataElementsToList = ({ newDataElements, dataElements }: ConcatDataElements) => {
    const dataElementList = [];
    for (const dataElemId of newDataElements) {
        if (!dataElements.find((item) => getReportDataElementId(item) === dataElemId)) {
            const dataElement = getDataElementById(dataElemId);
            if (!dataElement) continue;

            dataElementList.push(dataElement);
        }
    }

    return dataElements.concat(dataElementList);
};

export const concatDataElementsToListByContext = ({
    newDataElements,
    dataElements,
    contextType,
}: ConcatDataElements & { contextType: ReportBuilderDragDropContextType }) => {
    const items: typeof dataElements = [];

    const reportPromptsOrColumnsDataElements = getReportDataElementsByContext(contextType) || [];

    for (const newDataElement of newDataElements) {
        const dataElement = reportPromptsOrColumnsDataElements?.find(
            (dataElement) => getReportDataElementId(dataElement) === newDataElement,
        );

        if (!dataElement) continue;
        if (getDataElementById(newDataElement)) continue;

        items.push(dataElement);
    }

    return dataElements.concat(items);
};

export const getSelectedDraggedItemsWithValue = ({
    contextType,
    draggedItem,
}: {
    contextType: ReportBuilderDragDropContextType;
    draggedItem: string;
}) => {
    let draggedItems = getSelectedDraggedItems(contextType);

    if (!draggedItems?.length) {
        draggedItems = [draggedItem];
    }

    return draggedItems;
};
