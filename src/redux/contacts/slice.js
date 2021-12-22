import { createSlice } from '@reduxjs/toolkit';
import { fetchItems, addItem, removeItem } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  filter: '',
};

// We can mutate state below because of integrated IMMER lib only!

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: state => {
      console.log('GET request sent');
      state.isLoading = true;
    },
    [fetchItems.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchItems.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
    },

    [addItem.pending]: () => {
      console.log('POST request sent');
    },
    [addItem.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
    },
    [addItem.rejected]: (_, { payload }) => {
      console.log(payload);
    },

    [removeItem.pending]: () => {
      console.log('DELETE request sent');
    },
    [removeItem.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
    [removeItem.rejected]: (_, { payload }) => {
      console.log(payload);
    },
  },
});

export default slice;
