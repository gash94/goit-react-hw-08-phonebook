import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import PropTypes from "prop-types";
import {
    Text,
    Heading,
    Button,
    Box,
    Stack,
    Flex,
    Image,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { faker } from "@faker-js/faker";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const avatar = faker.image.avatar();

    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <Box
            maxW="auto"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            m={2}>
            <Stack align={"start"} spacing={2}>
                <Flex w={150} h={150} align="center" justify="center">
                    <Image
                        borderRadius="full"
                        boxSize="150px"
                        src={avatar}
                        alt={contact.name}
                    />
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{contact.name}</Heading>
                    <Text mt={1} fontSize={"sm"}>
                        {contact.number}
                    </Text>
                </Box>
                <Button
                    variant="outline"
                    rightIcon={<CloseIcon color="red" />}
                    onClick={handleDelete}>
                    Delete contact
                </Button>
            </Stack>
        </Box>
    );
};
Contact.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string,
    }),
};
