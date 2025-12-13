import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { YearFilter } from '../../../domain/models';

interface DashboardState {
  yearFilter: YearFilter;
}

const initialState: DashboardState = {
  yearFilter: 'ALL',
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setYearFilter(state, action: PayloadAction<YearFilter>) {
      state.yearFilter = action.payload;
    },
  },
});

export const { setYearFilter } = dashboardSlice.actions;
export default dashboardSlice.reducer;
