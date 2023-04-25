import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { fetchContacts } from "../redux/operations";
import { getIsLoading } from "../redux/selectors";

import css from "./App.module.css";

const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.app}>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <div className={css.contactsBox}>
                <MutatingDots
                    height="100"
                    width="100"
                    color="#000"
                    secondaryColor="#000"
                    radius="15"
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass={css.loader}
                    visible={isLoading}
                />
                <Filter />
                <ContactList />
            </div>
        </div>
    );
};

export default App;
