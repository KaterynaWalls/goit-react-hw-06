import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter) || '';

  const handleSearchUser = event => {
    dispatch(changeFilter(event.target.value.toLowerCase()));
  };

  return (
    <div className={s.searchWrap}>
      <label>
        Find contact by name
        <input
          className={s.searchInput}
   
          type="text"
          value={filter}
          onChange={handleSearchUser}
        />
      </label>
    </div>
  );
};

export default SearchBox;
