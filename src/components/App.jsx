import React, { Component } from "react";
import css from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
    state = {
        contacts: [],
        name: "",
    };
    render() {
        return (
            <div className={css.app}>
                <h1>Phonebook</h1>
                <ContactForm />

                <h2>Contacts</h2>
                <Filter />
                <br></br>
                <ContactList />
            </div>
        );
    }
}

export default App;
