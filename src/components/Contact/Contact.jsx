import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { deleteContact } from "../../redux/contacts/operations";
import PropTypes from "prop-types";

import css from "./Contact.module.css";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <div className={css.item}>
            <p className={css.name}>{contact.name}:</p>{" "}
            <p className={css.number}>{contact.number}</p>
            <button className={css.btn} onClick={handleDelete}>
                <MdClose size={40} />
            </button>
        </div>
    );
};
Contact.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string,
    }),
};
