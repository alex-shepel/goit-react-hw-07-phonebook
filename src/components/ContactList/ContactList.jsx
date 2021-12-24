import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchItems,
  removeItem,
  getIsLoading,
  getFilteredItems,
} from 'redux/contacts';
import Spinner from 'components/Spinner';

const ContactList = () => {
  const items = useSelector(getFilteredItems);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const list = (
    <ul className={s.list}>
      {items.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.entry}>
            <span>{name}</span>
            <span className={s.number}>{number}</span>
          </p>
          <button type="button" onClick={() => dispatch(removeItem(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );

  return <>{isLoading ? <Spinner /> : list}</>;
};

export default ContactList;
