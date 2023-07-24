import * as React from 'react';

import Typography, { type TypographyProps } from '@mui/material/Typography';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import type { IconButtonProps } from '@mui/material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import IconButton from '@mui/material/Typography';

import {
    useNormalizeReportPromptsOrColumnsDataElements,
    useHandleSelectedDraggedItemsByContext,
    useSetSelectedDraggedItemsByContext,
    concatDataElementsToListByContext,
    useSelectedDraggedItemsByContext,
    getDataElementClassName,
    getReportDataElementId,
    useSetDataElements,
    getDataElements,
} from '@/src/hooks/useReportBuilder';

import type { ReportBuilderDragDropContextType } from '@/src/types';
import { reportBuilderDragDropContext } from '@/src/redux/reducers/reportBuilder';
import { useSetEditModalAction } from '@/src/hooks/useModal';
import { useGetDraggableProps } from '@/src/hooks/useGlobalDragDrop';
import { DarkTooltip } from '@/src/components/Tooltips/CustomTooltip';
import * as constants from '@/src/utils/constants';
import { useTheme } from '@/src/theme';
import styles from './styles';

type Props = {
    typographyProps?: TypographyProps;
    contextType: ReportBuilderDragDropContextType;
    multiple?: boolean;
    item: { id: string; title: React.ReactNode };
};

export default function DataElement({ item, contextType, typographyProps, multiple = true }: Props) {
    const theme = useTheme(),
        handleSelectedDraggedItemsByContext = useHandleSelectedDraggedItemsByContext(),
        setSelectedDraggedItemsByContext = useSetSelectedDraggedItemsByContext(),
        normalizeDataElements = useNormalizeReportPromptsOrColumnsDataElements(),
        selectedDraggedItems = useSelectedDraggedItemsByContext(contextType),
        setDataElements = useSetDataElements(),
        setDrawerState = useSetEditModalAction(),
        draggableProps = useGetDraggableProps({ item, contextType: reportBuilderDragDropContext }),
        isMainDataElement = contextType === 'dataElements',
        dataElementId = getReportDataElementId(item),
        rootStyle = styles.dataElement({ theme });

    let className = `noSelect ${getDataElementClassName(dataElementId)} dataElement${
        typographyProps?.className ? ' ' + typographyProps.className : ''
    }`;

    if (selectedDraggedItems?.includes(dataElementId)) {
        className += ' ' + constants.REPORT_BUILDER.draggedItemClassName;
    }

    if (!multiple) {
        className += ' dataElementSingle';
    }

    const handleClick = async () => {
        handleSelectedDraggedItemsByContext({
            context: contextType,
            dataElementId,
            multiple,
        });
    };

    const handleRemoveDataElement: IconButtonProps['onClick'] = async (e) => {
        e.stopPropagation();

        setDataElements(
            concatDataElementsToListByContext({
                newDataElements: [dataElementId],
                dataElements: getDataElements(),
                contextType,
            }),
        );

        normalizeDataElements({ dataElementsToRemove: [dataElementId], contextType });

        setSelectedDraggedItemsByContext({
            items: selectedDraggedItems?.filter((itemId) => itemId !== dataElementId) || [],
            context: contextType,
        });
    };

    const handleOpenDataElementDrawer = (e: React.MouseEvent) => {
        e.stopPropagation();

        setDrawerState({
            isCustom: true,
            open: true,
            data: {
                dataElement: item,
                contextType,
            },
        });
    };

    return (
        <Typography
            data-draggable-id={dataElementId}
            data-context-type={contextType}
            component="div"
            className={className}
            sx={rootStyle}
            onClick={handleClick}
            {...draggableProps}
        >
            {/* <span className="dataElementRibbon"></span> */}
            <span className="dataElementTitle">{item.title}</span>

            {!isMainDataElement && (
                <>
                    <DarkTooltip title="Customize" placement="left">
                        <IconButton className="removeDataElementBtn" onClick={handleOpenDataElementDrawer}>
                            <SettingsRoundedIcon />
                        </IconButton>
                    </DarkTooltip>

                    <DarkTooltip title="Remove" placement="right">
                        <IconButton className="removeDataElementBtn" onClick={handleRemoveDataElement}>
                            <ClearOutlinedIcon />
                        </IconButton>
                    </DarkTooltip>
                </>
            )}

            <span className="dataElementDragIndicator">
                <DragIndicatorOutlinedIcon />
            </span>
        </Typography>
    );
}
