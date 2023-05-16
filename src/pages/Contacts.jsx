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
    Spacer,
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
                minWidth="max-content"
                alignItems="center"
                justifyContent="center">
                <Filter />
                <Spacer />
                <Button rightIcon={<AddIcon />} onClick={onOpen}>
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
