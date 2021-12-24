import { createSlice } from '@reduxjs/toolkit';
import { fetchItems, addItem, removeItem } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isAdding: false,
  deletingId: null,
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

    [addItem.pending]: state => {
      console.log('POST request sent');
      state.isAdding = true;
    },
    [addItem.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isAdding = false;
    },
    [addItem.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isAdding = false;
    },

    [removeItem.pending]: (state, { meta }) => {
      console.log('DELETE request sent');
      state.deletingId = meta.arg;
    },
    [removeItem.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
      state.deletingId = null;
    },
    [removeItem.rejected]: (state, { payload }) => {
      console.log(payload);
      state.deletingId = null;
    },
  },
});

export default slice;
