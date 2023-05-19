import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { fetchContacts } from "../redux/contacts/operations";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Flex,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Contacts = () => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Flex
                alignItems="center"
                justifyContent="start"
                wrap="wrap"
                backdropFilter="auto"
                backdropBlur="20px"
                borderWidth="2px"
                borderRadius="lg"
                p="5">
                <Filter />

                <Button mt="7" ml="5" rightIcon={<AddIcon />} onClick={onOpen}>
                    Add contact
                </Button>
                <Modal
                    blockScrollOnMount={false}
                    isOpen={isOpen}
                    onClose={onClose}
                    onSubmit={onClose}
                    motionPreset="slideInBottom">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add Contact</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <ContactForm />
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
            <ContactList />
        </>
    );
};
export default Contacts;
