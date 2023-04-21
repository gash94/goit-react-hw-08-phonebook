import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filterSlice";
import css from "./Filter.module.css";

export const Filter = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch(setStatusFilter(e.target.value));
    };

    return (
        <div className={css.filter}>
            <label className={css.label}>
                Filter
                <input
                    className={css.input}
                    autoComplete="off"
                    type="search"
                    name="filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    placeholder="Enter name"
                    onChange={handleFilterChange}
                />
            </label>
        </div>
    );
};
