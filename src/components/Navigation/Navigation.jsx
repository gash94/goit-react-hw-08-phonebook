import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import { FcAddressBook } from "react-icons/fc";
export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <ButtonGroup>
            <Button
                leftIcon={<FcAddressBook size={35} />}
                variant="outline"
                as={NavLink}
                to="/"
                _activeLink={{
                    backgroundColor: "blue.400",
                }}>
                <Text fontSize="xl" fontWeight="bold">
                    PhoneBook
                </Text>
            </Button>
            {isLoggedIn && (
                <Button
                    as={NavLink}
                    to="/contacts"
                    _activeLink={{
                        backgroundColor: "blue.400",
                    }}>
                    Contacts
                </Button>
            )}
        </ButtonGroup>
    );
};
