const getItems = state => state.contacts.items;
const getIsLoading = state => state.contacts.isLoading;
const getFilter = state => state.contacts.filter;

export { getItems, getIsLoading, getFilter };
