import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ReportBuilderDragDropContextType, ReportBuilderSelectedDragItems, ReportBuilderState } from '@/src/types';

const initialState: ReportBuilderState = {
    selectedDraggedItemContext: '',
    reportPromptDataElements: [],
    reportColumnDataElements: [],
    selectedDraggedItems: {},
    _dataElements: [],
    dataElements: [],
};

export const reportBuilderDragDropContext = 'reportBuilder';

export const reportBuilderSlice = createSlice({
    name: 'reportBuilder',
    initialState,
    reducers: {
        setDataElements: (state, action: PayloadAction<ReportBuilderState['dataElements']>) => {
            state.dataElements = action.payload.sort((a, b) => a?.title?.localeCompare(b?.title));
        },
        setPrivateDataElements: (state, action: PayloadAction<ReportBuilderState['_dataElements']>) => {
            state._dataElements = action.payload.sort((a, b) => a?.title?.localeCompare(b?.title));
        },

        setSelectedDraggedItems: (state, action: PayloadAction<ReportBuilderState['selectedDraggedItems']>) => {
            state.selectedDraggedItems = action.payload;
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

        setSelectedDraggedItemContext: (
            state,
            action: PayloadAction<ReportBuilderState['selectedDraggedItemContext']>,
        ) => {
            state.selectedDraggedItemContext = action.payload;
        },

        setSelectedDraggedItemsByContext: (
            state,
            action: PayloadAction<{
                context: ReportBuilderDragDropContextType;
                items: ReportBuilderSelectedDragItems;
            }>,
        ) => {
            const contextType = action.payload.context;

            state.selectedDraggedItemContext = contextType;

            state.selectedDraggedItems = {
                [contextType]: action.payload.items,
            };
        },

        resetReportBuilderStates: (
            state,
            action: PayloadAction<{ dataElements: ReportBuilderState['dataElements'] }>,
        ) => {
            state.selectedDraggedItemContext = initialState.selectedDraggedItemContext;
            state.reportPromptDataElements = initialState.reportPromptDataElements;
            state.reportColumnDataElements = initialState.reportColumnDataElements;
            state.selectedDraggedItems = initialState.selectedDraggedItems;
            state.dataElements = action.payload.dataElements;
        },

        populateDataElements: (state, action: PayloadAction<ReportBuilderState['dataElements']>) => {
            const dataElements = action.payload?.sort((a, b) => a?.title?.localeCompare(b?.title)) || [];

            state._dataElements = dataElements;
            state.dataElements = dataElements;
        },
    },
});

export const {
    setSelectedDraggedItemsByContext,
    setSelectedDraggedItemContext,
    setReportColumnsDataElements,
    setReportPromptDataElements,
    resetReportBuilderStates,
    setSelectedDraggedItems,
    setPrivateDataElements,
    populateDataElements,
    setDataElements,
} = reportBuilderSlice.actions;

export default reportBuilderSlice.reducer;
