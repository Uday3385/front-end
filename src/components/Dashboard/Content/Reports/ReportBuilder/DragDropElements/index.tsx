'use client';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { reportBuilderDragDropContext } from '@/src/redux/reducers/reportBuilder';
import { useSetupGlobalDragDrop } from '@/src/hooks/useGlobalDragDrop';
import DragDropDirectionArrows from '../DragDropDirectionArrows';
import DataElements from '../DataElements';
import { useTheme } from '@/src/theme';
import DropRegion from '../DropRegion';
import stylesObj from './styles';

export default function DragDropElements() {
    const theme = useTheme(),
        { isReady } = useSetupGlobalDragDrop({
            // dropEffect: 'move',
            // effectAllowed: 'move',
            contextType: reportBuilderDragDropContext,
            onDragStart: (args) => {
                console.log('start: ', args);
            },
            onDrop: (args) => {
                console.log('drop: ', args);
            },
            // onDragEnter: (args) => {
            //     console.log('drag enter: ', args);
            // },
            onDragOver: (args) => {
                console.log('drag over: ', args);
            },
            onDragLeave: (args) => {
                console.log('drag leave: ', args);
            },
            onDragEnd: (args) => {
                console.log('drag end: ', args);
            },
        });

    return (
        <Box sx={stylesObj({ theme })}>
            <div className="dragElements">{isReady ? <DataElements /> : null}</div>

            <div className="droppedElements">
                <div className="reportPrompts">
                    <DragDropDirectionArrows directionType="reportPrompts" />

                    <div className="dropBoxRapper">
                        <Typography className="dragDropTitle">Report Prompts</Typography>
                        {isReady ? <DropRegion dropRegion="reportPrompts" /> : null}
                    </div>
                </div>
                <div className="reportColumns">
                    <DragDropDirectionArrows directionType="columns" />

                    <div className="dropBoxRapper">
                        <Typography className="dragDropTitle">Columns</Typography>
                        {isReady ? <DropRegion dropRegion="columns" /> : null}
                    </div>
                </div>
            </div>
        </Box>
    );
}
