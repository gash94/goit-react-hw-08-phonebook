import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    { id: 0, name: "John", number: "123-123-123" },
    { id: 1, name: "Elie", number: "123-123-123" },
    { id: 2, name: "Max", number: "123-123-123" },
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
