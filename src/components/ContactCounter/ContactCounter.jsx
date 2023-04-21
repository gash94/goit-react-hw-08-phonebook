import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";

import css from "./ContactCounter.module.css";

export const ContactCounter = () => {
    const contacts = useSelector(getContacts);

    const count = contacts.reduce(
        (acc, contact) => {
            console.log(contact);
            if (contact.id) {
                acc.add += 1;
            }
            return acc;
        },
        { add: 0 }
    );

    return (
        <>
            <p className={css.text}>Number of contacts: {count.add}</p>
        </>
    );
};
