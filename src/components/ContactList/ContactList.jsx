import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getItems } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchItems, removeItem } from 'redux/contacts/operations';

const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {items
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
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
};

export default ContactList;
