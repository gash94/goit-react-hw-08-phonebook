import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Box, Button, FormLabel, Input } from "@chakra-ui/react";

export const LoginForm = () => {
    const dispatch = useDispatch();

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
            <Box border="solid" p="3" as="form" onSubmit={handleSubmit}>
                <FormLabel>
                    Email
                    <Input type="email" name="email" />
                </FormLabel>
                <FormLabel>
                    Password
                    <Input type="password" name="password" />
                </FormLabel>
                <Button type="submit">Log In</Button>
            </Box>
        </Box>
    );
};
