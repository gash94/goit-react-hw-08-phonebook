import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks";
// import { FaMoon, FaSun } from "react-icons/fa";
import { Flex, Spacer, useColorMode, IconButton } from "@chakra-ui/react";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    // const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex pt="4" pb="2" alignItems="center" wrap="wrap">
            <Navigation />
            <Spacer />
            {/* <IconButton
                mr="2"
                aria-label="toggle theme"
                rounded="full"
                size="sm"
                onClick={toggleColorMode}
                icon={colorMode !== "dark" ? <FaSun /> : <FaMoon />}
            /> */}
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
    );
};
