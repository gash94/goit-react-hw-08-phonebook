import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { getStatusFilter, getContacts } from "../../redux/selectors";

import css from "./ContactList.module.css";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getStatusFilter);

    const visibileContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(statusFilter);
    });
    return (
        <>
            <ul className={css.list}>
                {visibileContacts.map((contact) => (
                    <li className={css.item} key={contact.id}>
                        <Contact contact={contact} />
                    </li>
                ))}
            </ul>
        </>
    );
};
