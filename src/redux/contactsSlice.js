import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    { id: "0", name: "John", number: "+120 654-534-623" },
    { id: "1", name: "Elie", number: "+23 764 800 333" },
    { id: "2", name: "Max", number: "(12) 44 667 80" },
];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.findIndex(
                (contact) => contact.id === action.payload
            );
            state.splice(index, 1);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
