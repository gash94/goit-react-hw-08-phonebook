import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks";
import { Text, Button } from "@chakra-ui/react";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Text>
            Welcome, {user.name}{" "}
            <Button onClick={() => dispatch(logOut())}>Log out</Button>
        </Text>
    );
};
