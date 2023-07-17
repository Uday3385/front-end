import { ReportBuilderState } from '@/src/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ReportBuilderState = {
    reportPromptDataElements: [],
    reportColumnDataElements: [],
    dataElements: [],
};

export const reportBuilderDragDropContext = 'reportBuilder';

export const reportBuilderSlice = createSlice({
    name: 'reportBuilder',
    initialState,
    reducers: {
        setDataElements: (state, action: PayloadAction<ReportBuilderState['dataElements']>) => {
            state.dataElements = action.payload;
        },
        setReportPromptDataElements: (state, action: PayloadAction<ReportBuilderState['reportPromptDataElements']>) => {
            state.reportPromptDataElements = action.payload;
        },
        setReportColumnsDataElements: (
            state,
            action: PayloadAction<ReportBuilderState['reportColumnDataElements']>,
        ) => {
            state.reportColumnDataElements = action.payload;
        },
    },
});

export const { setDataElements, setReportPromptDataElements, setReportColumnsDataElements } =
    reportBuilderSlice.actions;

export default reportBuilderSlice.reducer;
