import { createSlice } from '@reduxjs/toolkit';

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
    fetchItemsRequest: state => {
      console.log('GET request sent');
      state.isLoading = true;
    },
    fetchItemsSuccess: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    fetchItemsError: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
    },

    addItemRequest: () => {
      console.log('POST request sent');
    },
    addItemSuccess: (state, { payload }) => {
      state.items.push(payload);
    },
    addItemError: (_, { payload }) => {
      console.log(payload);
    },

    removeItemRequest: () => {
      console.log('removeETE request sent');
    },
    removeItemSuccess: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
    removeItemError: (_, { payload }) => {
      console.log(payload);
    },

    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export default slice;
