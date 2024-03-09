import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  function dltBtn(id) {
    dispatch(deleteContact(id));
  }
  return (
    <li className={css.item} id={id}>
      {name}: {number}
      <button className={css.btn} type="button" onClick={() => dltBtn(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
