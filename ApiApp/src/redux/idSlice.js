import { createSlice } from '@reduxjs/toolkit';

const idSlice = createSlice({
    name: 'ids',
    initialState: [],
    reducers: {
        addId: (state, action) => {
            state.push(action.payload);
        },
        removeId: (state, action) => {
            return state.filter((id) => id !== action.payload);
        },
        clearIds: () => {
            return [];
        },
    },
});

export const { addId, removeId, clearIds } = idSlice.actions;
export default idSlice.reducer;
