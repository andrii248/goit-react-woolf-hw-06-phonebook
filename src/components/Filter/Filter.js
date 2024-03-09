import { filterContacts, getFilter } from 'redux/filterSlice';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;
