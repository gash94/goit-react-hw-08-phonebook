import React from "react";
import PropTypes from "prop-types";

import css from "./Filter.module.css";

const Filter = ({ value, onChange, result }) => {
    return (
        <div className={css.filter}>
            <label className={css.label}>
                Filter
                <input
                    className={css.input}
                    type="search"
                    value={value}
                    onChange={onChange}
                    placeholder="Enter name"
                />
            </label>
            <p>Number of contacts: {result}</p>
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    result: PropTypes.number.isRequired,
};

export default Filter;
