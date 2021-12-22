import slice from './slice';

export const {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsError,
  addItemRequest,
  addItemSuccess,
  addItemError,
  removeItemRequest,
  removeItemSuccess,
  removeItemError,
  setFilter,
} = slice.actions;
