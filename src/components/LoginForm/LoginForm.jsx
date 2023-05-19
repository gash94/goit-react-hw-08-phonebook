import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    Box,
    Button,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { selectError } from "../../redux/auth/selectors";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <Box
            display="flex"
            h="80vh"
            justifyContent="center"
            alignItems="center">
            <Box
                as="form"
                onSubmit={handleSubmit}
                maxW="auto"
                borderWidth="2px"
                borderRadius="lg"
                overflow="hidden"
                p="5"
                m="2"
                backdropFilter="auto"
                backdropBlur="20px">
                <FormLabel>
                    Email
                    <Input required type="email" name="email" />
                </FormLabel>
                <FormLabel>
                    Password
                    <Input required type="password" name="password" />
                </FormLabel>
                <Button type="submit">Log In</Button>
                {error && (
                    <Alert mt="2" status="error">
                        <AlertIcon />
                        <AlertTitle>Wrong login or password.</AlertTitle>
                    </Alert>
                )}
            </Box>
        </Box>
    );
};
