import {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsError,
  addItemRequest,
  addItemSuccess,
  addItemError,
  removeItemRequest,
  removeItemSuccess,
  removeItemError,
} from './actions';
import * as api from 'services/contacts-api';

const fetchItems = () => dispatch => {
  dispatch(fetchItemsRequest());
  api
    .getContacts()
    .then(({ data }) => dispatch(fetchItemsSuccess(data)))
    .catch(error => dispatch(fetchItemsError(error)));
};

const addItem = (name, number) => dispatch => {
  dispatch(addItemRequest());
  api
    .addContact({ name, number })
    .then(({ data }) => dispatch(addItemSuccess(data)))
    .catch(error => dispatch(addItemError(error)));
};

const removeItem = id => dispatch => {
  dispatch(removeItemRequest());
  api
    .delContact(id)
    .then(({ data }) => dispatch(removeItemSuccess(data.id)))
    .catch(error => dispatch(removeItemError(error)));
};

export { fetchItems, addItem, removeItem };
