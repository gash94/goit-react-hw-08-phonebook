import React, { Component } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

class ContactForm extends Component {
    render() {
        return (
            <>
                <form>
                    <label htmlFor="name">Name</label>
                    <input
                        autoComplete="off"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <label htmlFor="number">Number</label>
                    <input
                        autoComplete="off"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <button>Add contact</button>
                </form>
            </>
        );
    }
}

export default ContactForm;
