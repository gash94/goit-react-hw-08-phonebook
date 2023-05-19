import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contacts/operations";
import {
    Button,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { AtSignIcon, PhoneIcon } from "@chakra-ui/icons";

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
        dispatch(addContact({ name, number }));
        e.target.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormLabel>
                    Name
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <AtSignIcon color="gray.300" />
                        </InputLeftElement>
                        <Input
                            autoComplete="off"
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            placeholder="e.g. John Doe"
                            required
                        />
                    </InputGroup>
                </FormLabel>
                <FormLabel>
                    Number
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <PhoneIcon color="gray.300" />
                        </InputLeftElement>
                        <Input
                            autoComplete="off"
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            placeholder="e.g. 560-432-234"
                            required
                        />
                    </InputGroup>
                </FormLabel>
                <Button type="submit">Add contact</Button>
            </form>
        </>
    );
};
