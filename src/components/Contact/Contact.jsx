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
    useColorModeValue,
} from "@chakra-ui/react";
import { CloseIcon, PhoneIcon } from "@chakra-ui/icons";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const firstLetter = contact.name[0];

    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <Box
            maxW="auto"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            m={2}
            backdropFilter="auto"
            backdropBlur="20px">
            <Stack align={"start"} spacing={2}>
                <Flex
                    w={150}
                    h={150}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg={useColorModeValue("gray.400", "gray.600")}>
                    <Heading
                        mb={2}
                        fontSize="8xl"
                        fontWeight="bold"
                        textTransform="uppercase">
                        {firstLetter}
                    </Heading>
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{contact.name}</Heading>
                    <Text mt={1} fontSize="md">
                        <PhoneIcon mr="2" color="gray.300" />
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
