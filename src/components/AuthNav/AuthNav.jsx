import { ButtonGroup, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return (
        <ButtonGroup>
            <Button
                variant="outline"
                colorScheme="blue"
                as={NavLink}
                to="/register">
                Register
            </Button>
            <Button colorScheme="blue" as={NavLink} to="/login">
                Log In
            </Button>
        </ButtonGroup>
    );
};
