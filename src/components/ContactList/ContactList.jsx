import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { getStatusFilter, getContacts } from "../../redux/contacts/selectors";
import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getStatusFilter);
    const visibileContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(statusFilter);
    });
    return (
        <>
            {contacts.length <= visibileContacts.length ? (
                <Text fontSize="xl">Number of contacts: {contacts.length}</Text>
            ) : (
                <Text fontSize="xl">
                    Contacts found: {visibileContacts.length}
                </Text>
            )}
            {contacts.length === 0 ? (
                <Text fontSize="xl">No contacts yet 🙁</Text>
            ) : contacts !== "" && visibileContacts.length === 0 ? (
                <Text fontSize="xl">No contacts found 😞 </Text>
            ) : (
                <UnorderedList styleType="none" m="0" p="0">
                    <Flex wrap="wrap" justify="center">
                        <AnimatePresence>
                            {visibileContacts.reverse().map((contact) => (
                                <ListItem
                                    as={motion.li}
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
                                </ListItem>
                            ))}
                        </AnimatePresence>
                    </Flex>
                </UnorderedList>
            )}
        </>
    );
};
