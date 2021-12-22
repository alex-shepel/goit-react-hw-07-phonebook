import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from 'redux/contacts/actions';
import { getFilter, getItems } from 'redux/contacts/selectors';

const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

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
