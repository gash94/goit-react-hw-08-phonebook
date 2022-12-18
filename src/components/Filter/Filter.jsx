import React, { Component } from "react";
import PropTypes from "prop-types";

import css from "./Filter.module.css";

class Filter extends Component {
    render() {
        const { value, onChange, result } = this.props;
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
    }
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    result: PropTypes.number,
};

export default Filter;
