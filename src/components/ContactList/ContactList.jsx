import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { getStatusFilter, getContacts } from "../../redux/selectors";
import { motion, AnimatePresence } from "framer-motion";

import css from "./ContactList.module.css";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getStatusFilter);
    const visibileContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(statusFilter);
    });
    return (
        <>
            {contacts.length <= visibileContacts.length ? (
                <p>Number of contacts: {contacts.length}</p>
            ) : (
                <p>Contacts found: {visibileContacts.length}</p>
            )}
            {contacts.length === 0 ? (
                <p>No contacts yet 🙁</p>
            ) : contacts !== "" && visibileContacts.length === 0 ? (
                <>No contacts found 😞 </>
            ) : (
                <ul className={css.list}>
                    <AnimatePresence>
                        {visibileContacts.reverse().map((contact) => (
                            <motion.li
                                className={css.item}
                                key={contact.id}
                                initial={{
                                    y: -50,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                    },
                                }}
                                exit={{
                                    x: 50,
                                    opacity: 0,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}>
                                {<Contact contact={contact} />}
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            )}
        </>
    );
};
