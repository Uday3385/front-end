import { useDispatch, useSelector } from 'react-redux';

import {
    setReportColumnsDataElements,
    setReportPromptDataElements,
    setDataElements,
} from '@/src/redux/reducers/reportBuilder';

import type { DropRegionClassNames, ReportBuilderDropRegion, ReportBuilderState } from '@/src/types';
import type { DragEventType } from '@/src/hooks/useGlobalDragDrop';
import type { RootState, RootStateValues } from '@/src/redux/store';
import { getStoreState } from '@/src/hooks/useStore';

export const useDataElements = () => {
    const dataElements = useSelector((state: RootState) => state.reportBuilder.dataElements);
    return dataElements;
};

export const useReportPromptDataElements = () => {
    const dataElements = useSelector((state: RootState) => state.reportBuilder.reportPromptDataElements);
    return dataElements;
};

export const useReportColumnDataElements = () => {
    const dataElements = useSelector((state: RootState) => state.reportBuilder.reportColumnDataElements);
    return dataElements;
};

export const useReportDataElementsByDropRegion = (dropRegion: ReportBuilderDropRegion) => {
    let stateName: RootStateValues['reportBuilder'] =
        dropRegion === 'columns' ? 'reportColumnDataElements' : 'reportPromptDataElements';

    const dataElements = useSelector((state: RootState) => state.reportBuilder[stateName]);
    return dataElements;
};

export const useSetDataElements = () => {
    const dispatch = useDispatch();

    return (dataElements: ReportBuilderState['dataElements']) => {
        dispatch(setDataElements(dataElements));
    };
};

export const useSetReportPromptDataElements = () => {
    const dispatch = useDispatch();

    return (dataElements: ReportBuilderState['reportPromptDataElements']) => {
        dispatch(setReportPromptDataElements(dataElements));
    };
};

export const useSetReportColumnDataElements = () => {
    const dispatch = useDispatch();

    return (dataElements: ReportBuilderState['reportColumnDataElements']) => {
        dispatch(setReportColumnsDataElements(dataElements));
    };
};

export const useSetReportDataElementsByDropRegion = (dropRegion: ReportBuilderDropRegion) => {
    const dispatch = useDispatch();

    return (dataElements: ReportBuilderState['reportColumnDataElements']) => {
        if (dropRegion === 'columns') {
            dispatch(setReportColumnsDataElements(dataElements));
        } else if (dropRegion === 'reportPrompts') {
            dispatch(setReportPromptDataElements(dataElements));
        }
    };
};

export const useNormalizeDataElements = () => {
    const dispatch = useDispatch();

    return () => {
        const { dataElements, reportColumnDataElements, reportPromptDataElements }: ReportBuilderState = getStoreState({
            storeName: 'reportBuilder',
        });

        const newDataElements = [];
        for (const dataElement of dataElements) {
            const hasDataElementInReportPrompts = reportPromptDataElements.find((item) => item?.id === dataElement?.id),
                hasDataElementInReportColumns = reportColumnDataElements.find((item) => item?.id === dataElement?.id);

            if (hasDataElementInReportPrompts && hasDataElementInReportColumns) {
                continue;
            }

            newDataElements.push(dataElement);
        }

        dispatch(setDataElements(newDataElements));
    };
};

export const getDataElements = (): ReportBuilderState['dataElements'] =>
    getStoreState({ storeName: 'reportBuilder', stateName: 'dataElements' });

export const getDataElementById = (id: string) => {
    const dataElements = getDataElements();
    return dataElements.find((item) => item?.id === id);
};

export const getDropRegionClassName = (dropRegion: ReportBuilderDropRegion) => `dropRegion-${dropRegion}`;

export const getDataElementClassName = (dataElementId: string) =>
    `dataElement-${dataElementId.trim().replace(/[ ]/g, '-')}`;

export const getDropRegionClassNames = ({
    isDraggingOverItem,
    hasDataElements,
    dropRegionRef,
    draggedItem,
    isDragging,
    dropRegion,
}: DropRegionClassNames) => {
    let dropRegionClassName = `dropRegion ${getDropRegionClassName(dropRegion)}`,
        boxWrapperClassName = 'boxWrapper';

    // When moving items from dropped region, don't show the color highlighter
    if (dropRegionRef?.current?.querySelector('.' + getDataElementClassName(draggedItem as string))) {
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

export const isDraggedElementDroppable = ({ draggedItem, event }: { draggedItem: string; event: DragEventType }) => {
    if (event?.currentTarget?.querySelector('.' + getDataElementClassName(draggedItem))) {
        return false;
    }

    return true;
};
