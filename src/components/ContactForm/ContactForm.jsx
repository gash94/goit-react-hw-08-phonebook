import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

import { getContacts } from "../../redux/selectors";

import css from "./ContactForm.module.css";

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const number = e.target.elements.number.value;
        const normalizedCase = name.toLowerCase();
        let isAdded = false;

        contacts.forEach((el) => {
            if (el.name.toLowerCase() === normalizedCase) {
                alert(`${name} is already in contacts`);
                isAdded = true;
            }
        });

        if (isAdded) {
            return;
        }
        dispatch(addContact(name, number));
        e.target.reset();
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
                        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
