const getItems = state => state.contacts.items;
const getIsLoading = state => state.contacts.isLoading;
const getIsAdding = state => state.contacts.isAdding;
const getDeletingId = state => state.contacts.deletingId;
const getFilter = state => state.contacts.filter;
const getFilteredItems = state =>
  getItems(state).filter(({ name }) =>
    name.toLowerCase().includes(getFilter(state).toLowerCase()),
  );

export {
  getItems,
  getIsLoading,
  getIsAdding,
  getDeletingId,
  getFilter,
  getFilteredItems,
};
