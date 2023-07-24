'use client';

import Box from '@mui/material/Box';

import {
    useHandleSelectedDraggedItemsByContext,
    useSelectedDraggedItemContext,
    getReportDataElementId,
} from '@/src/hooks/useReportBuilder';

import type { ReportBuilderDragDropContextType } from '@/src/types';
import { reportBuilderDragDropContext } from '@/src/redux/reducers/reportBuilder';
import RuleReportBuilderDropContainer from './RuleReportBuilderDropContainer';
import { useSetupGlobalDragDrop } from '@/src/hooks/useGlobalDragDrop';
import ReportBuilderDropContainer from './ReportBuilderDropContainer';
import DataElements from '../DataElements';
import { useTheme } from '@/src/theme';
import stylesObj from './styles';
import ApplyReportButton from '../ApplyReportButton';

export default function DragDropElements({ isRuleReportBuilderPage = false }: { isRuleReportBuilderPage?: boolean }) {
    const theme = useTheme(),
        handleSelectedDraggedItemsByContext = useHandleSelectedDraggedItemsByContext(),
        selectedDraggedItemContext = useSelectedDraggedItemContext(),
        buttonStyle = { margin: '10px 0px 0px 0px' };

    const { isReady } = useSetupGlobalDragDrop({
        getItemId: getReportDataElementId,
        contextType: reportBuilderDragDropContext,
        onDragStart: ({ event }) => {
            const elem = event.target as HTMLElement;
            if (!elem?.classList) return;

            let dragContextType = selectedDraggedItemContext;

            if (!selectedDraggedItemContext) {
                dragContextType = elem.getAttribute('data-context-type') as ReportBuilderDragDropContextType;

                if (!dragContextType) return;
            }

            handleSelectedDraggedItemsByContext({
                dataElementId: elem.getAttribute('data-draggable-id') as string,
                isDragStart: true,
                multiple: !isRuleReportBuilderPage,
                context: dragContextType,
            });
        },
    });

    return (
        <Box sx={stylesObj({ theme })}>
            <div className="dragElements">{isReady ? <DataElements multiple={!isRuleReportBuilderPage} /> : null}</div>

            <div className="droppedElements">
                {isReady && (
                    <>
                        {isRuleReportBuilderPage ? (
                            <>
                                <RuleReportBuilderDropContainer />
                                <ApplyReportButton sx={buttonStyle} isRuleReportBuilderPage={true} />
                            </>
                        ) : (
                            <ReportBuilderDropContainer />
                        )}
                    </>
                )}
            </div>
        </Box>
    );
}
