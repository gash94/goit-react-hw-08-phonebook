import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";

import { deleteContact } from "../../redux/contactsSlice";

import css from "./Contact.module.css";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <>
            {contact.name}: <b>{contact.number}</b>
            <button className={css.btn} onClick={handleDelete}>
                <MdClose size={24} />
            </button>
        </>
    );
};
