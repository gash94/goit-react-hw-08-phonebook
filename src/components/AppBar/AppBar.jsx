import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks";
import { Flex, Spacer } from "@chakra-ui/react";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Flex pt="4" pb="2" alignItems="center" wrap="wrap">
            <Navigation />
            <Spacer />

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
    );
};
