import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

// We can mutate state below because of integrated IMMER lib only!

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setItems: (state, { payload }) => {
      state.items = payload;
    },
    addItem: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: (name, number) => ({ payload: { name, number, id: nanoid() } }),
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export default slice;
