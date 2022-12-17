import React, { Component } from "react";
import PropTypes from "prop-types";

// import css from "./Filter.module.css";

class Filter extends Component {
    render() {
        const { value, onChange } = this.props;
        return (
            <div>
                <label>
                    Filter
                    <input
                        type="search"
                        value={value}
                        onChange={onChange}
                        placeholder="Enter name"
                    />
                </label>
            </div>
        );
    }
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;
