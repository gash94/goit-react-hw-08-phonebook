import { Heading, Box, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks";

export default function Home() {
    const { isLoggedIn } = useAuth();
    return (
        <Box maxW="38rem">
            <Heading
                mb={4}
                bgGradient="linear(to-l, blue.200, gray.500)"
                fontSize="5xl"
                bgClip="text"
                fontWeight="extrabold">
                Welcome to the PhoneBook app!
            </Heading>
            <Text fontWeight="semibold" fontSize="xl">
                This is your app to store your personal phone contacts. The
                following technological stack was used to write the application:
                React.js, Redux, redux toolkit, persist-gate, and JWT , in
                addition, ChakraUI is responsible for the appearance of the
                application.
            </Text>
            <Button
                as={NavLink}
                to="/register"
                size="lg"
                colorScheme="blue"
                mt="24px">
                {isLoggedIn ? "Go to contacts" : "Create a free account"}
            </Button>
        </Box>
    );
}
