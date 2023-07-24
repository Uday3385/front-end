import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import IconButton from '@mui/material/IconButton';

import {
    useNormalizeReportPromptsOrColumnsDataElements,
    useSetReportDataElementsByDropRegion,
    useSetSelectedDraggedItemsByContext,
    concatDataElementsToListByContext,
    useReportDataElementsByDropRegion,
    useSelectedDraggedItemsByContext,
    useSelectedDraggedItemContext,
    concatDataElementsToList,
    useNormalizeDataElements,
    getReportDataElementId,
    useSetDataElements,
    getDataElements,
} from '@/src/hooks/useReportBuilder';

import type { ReportBuilderDragDropArrowContextType } from '@/src/types';
import { DarkTooltip } from '@/src/components/Tooltips/CustomTooltip';

export default function DragDropDirectionArrows({
    multiple = true,
    contextType,
    title,
}: {
    contextType: ReportBuilderDragDropArrowContextType;
    multiple?: boolean;
    title?: string;
}) {
    const normalizeReportPromptsOrColumnsDataElements = useNormalizeReportPromptsOrColumnsDataElements(),
        setReportPromptsOrColumnsDataElements = useSetReportDataElementsByDropRegion(contextType),
        setSelectedDraggedItemsByContext = useSetSelectedDraggedItemsByContext(),
        selectedDraggedItemContext = useSelectedDraggedItemContext(),
        normalizeDataElements = useNormalizeDataElements(),
        selectedDraggedItems = useSelectedDraggedItemsByContext(contextType),
        reportDataElements = useReportDataElementsByDropRegion(contextType),
        selectedDataElements = useSelectedDraggedItemsByContext('dataElements'),
        setDataElements = useSetDataElements(),
        selectedDataElementsLen = selectedDataElements?.length || 0,
        selectedDraggedItemsLen = selectedDraggedItems?.length || 0,
        isSingleSelectedDataElements = selectedDataElementsLen < 2,
        isSingleDraggedItems = selectedDraggedItemsLen < 2,
        pluralizeRemoveElementText = isSingleDraggedItems ? '' : 's',
        pluralizeAddElementText = isSingleSelectedDataElements ? '' : 's',
        contextTypeLabel = contextType === 'columns' ? 'Columns' : 'Prompts';

    let disableAddBtn = selectedDataElementsLen < 1,
        disableRemoveBtn = !selectedDraggedItems || selectedDraggedItemsLen < 1;

    if (!disableAddBtn && selectedDataElements && selectedDataElementsLen) {
        let foundElements = 0;

        for (const selectedDataElement of selectedDataElements) {
            if (reportDataElements?.find((item) => getReportDataElementId(item) === selectedDataElement)) {
                ++foundElements;
            }
        }

        if (foundElements === selectedDataElementsLen) {
            disableAddBtn = true;
        }
    }

    const clearSelectedDraggedItems = () => {
        setSelectedDraggedItemsByContext({ items: [], context: selectedDraggedItemContext });
    };

    const handleRemoveDataElements = async () => {
        if (!selectedDraggedItems) return;

        setDataElements(
            concatDataElementsToListByContext({
                newDataElements: selectedDraggedItems,
                dataElements: getDataElements(),
                contextType,
            }),
        );

        normalizeReportPromptsOrColumnsDataElements({ dataElementsToRemove: selectedDraggedItems, contextType });
        clearSelectedDraggedItems();
    };

    const handleAddDataElements = async () => {
        if (!selectedDataElements) return;

        setReportPromptsOrColumnsDataElements(
            concatDataElementsToList({
                newDataElements: selectedDataElements,
                dataElements: multiple ? reportDataElements : [],
            }),
        );

        normalizeDataElements();
        clearSelectedDraggedItems();
    };

    const renderAddDataElementBtn = (
        <IconButton className="dragDropRightArrowBtn" disabled={disableAddBtn} onClick={handleAddDataElements}>
            <KeyboardDoubleArrowRightOutlinedIcon />
        </IconButton>
    );

    const renderRemoveDataElementBtn = (
        <IconButton className="dragDropLeftArrowBtn" disabled={disableRemoveBtn} onClick={handleRemoveDataElements}>
            <KeyboardDoubleArrowLeftOutlinedIcon />
        </IconButton>
    );

    let titleText = title;
    if (titleText === undefined) {
        titleText = `Report ${contextTypeLabel}`;
    }

    const addDataElementText = `Add${
        selectedDataElementsLen ? ' ' + selectedDataElementsLen : ''
    } Data Element${pluralizeAddElementText}${titleText ? ' to ' + titleText : ''}`;

    const removeDataElementText = `Remove${
        selectedDraggedItemsLen ? ' ' + selectedDraggedItemsLen : ''
    } Data Element${pluralizeRemoveElementText}${titleText ? ' from ' + titleText : ''}`;

    return (
        <div className="dragDropDirection">
            {disableAddBtn ? (
                renderAddDataElementBtn
            ) : (
                <DarkTooltip title={addDataElementText} placement="top">
                    {renderAddDataElementBtn}
                </DarkTooltip>
            )}

            {disableRemoveBtn ? (
                renderRemoveDataElementBtn
            ) : (
                <DarkTooltip title={removeDataElementText} placement="bottom">
                    {renderRemoveDataElementBtn}
                </DarkTooltip>
            )}
        </div>
    );
}
