import { useState } from 'react';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from 'redux/contacts/actions';
import { getItems } from 'redux/contacts/selectors';

const Fields = {
  NAME: 'name',
  NUMBER: 'number',
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const normalize = name => {
    const words = name.split(' ');
    return words
      .map(word => {
        const capLetter = word.charAt(0).toUpperCase();
        const rest = word.substring(1);
        return `${capLetter}${rest}`;
      })
      .join(' ');
  };

  const handleInputContact = e => {
    const { name, value } = e.target;

    switch (name) {
      case Fields.NAME:
        setName(value);
        return;
      case Fields.NUMBER:
        setNumber(value);
        return;
      default:
        return;
    }
  };

  const handleAddContact = e => {
    e.preventDefault();
    const normName = normalize(name);
    const isDuplicate = items.some(
      item => item.name === normName || item.number === number,
    );

    if (isDuplicate) {
      alert(`${normName} is already in contacts.`);
      return;
    }

    dispatch(addItem(normName, number));
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleAddContact}>
      <label className={s.field}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputContact}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.field}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputContact}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
