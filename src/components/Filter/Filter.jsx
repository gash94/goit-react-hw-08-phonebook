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
                    type="search"
                    name="filter"
                    placeholder="Enter name"
                    pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                    onChange={handleFilterChange}
                />
            </label>
        </div>
    );
};
