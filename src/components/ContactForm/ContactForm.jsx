import React, { useState } from "react";
import PropTypes from "prop-types";

import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleInputChange = (e) => {
        const prop = e.currentTarget.name;
        switch (prop) {
            case "name":
                setName(e.currentTarget.value);
                break;
            case "number":
                setNumber(e.currentTarget.value);
                break;
            default:
                throw new Error("Error");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({ name, number });
        setName("");
        setNumber("");
    };

    return (
        <>
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>
                    Name
                    <input
                        className={css.input}
                        autoComplete="off"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        required
                    />
                </label>
                <label className={css.label}>
                    Number
                    <input
                        className={css.input}
                        autoComplete="off"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={handleInputChange}
                        placeholder="e.g. 560-432-234"
                        required
                    />
                </label>
                <button className={css.button} type="submit">
                    Add contact
                </button>
            </form>
        </>
    );
};

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
