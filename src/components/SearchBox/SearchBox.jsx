import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const setChangeFilter = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.box}>
      <div className={css.searchBox}>
        <p>Find contacts by name and number</p>
        <input
          className={css.input}
          value={filter}
          onChange={setChangeFilter}
          type="text
        "
        />
      </div>
    </div>
  );
}
