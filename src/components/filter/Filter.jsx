import React from "react";
import css from './Filter.module.css'
import { useSelector, useDispatch} from "react-redux";
import { updateFilter } from "../../redux/reduxContacts/slice";
import { selectFilter } from "../../redux/reduxContacts/selectors";

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  return (
    <input
      className={css.input}
      value={filter}
      onChange={(event)=>dispatch(updateFilter(event.target.value))}
      type="text"
    />
  );
};