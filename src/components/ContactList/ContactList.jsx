import React, { Component } from "react";
import PropTypes from "prop-types";

// import css from "./ContactList.module.css";

class ContactList extends Component {
    render() {
        const { contacts, deleteContact } = this.props;
        return (
            <>
                <span>Number contacts: {contacts.length}</span>
                <ul>
                    {contacts.map(({ id, name, number }) => (
                        <li key={id}>
                            <span>
                                {name}: {number}
                            </span>
                            <button onClick={() => deleteContact(id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
    deleteContact: PropTypes.func,
};

export default ContactList;
