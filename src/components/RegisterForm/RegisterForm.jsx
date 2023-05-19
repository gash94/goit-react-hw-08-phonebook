import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import {
    Button,
    FormLabel,
    Input,
    Box,
    Alert,
    AlertIcon,
    AlertTitle,
} from "@chakra-ui/react";
import { selectError } from "../../redux/auth/selectors";

export const RegisterForm = () => {
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
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
                    Username
                    <Input
                        required
                        placeholder="Enter your nickname here"
                        type="text"
                        name="name"
                    />
                </FormLabel>
                <FormLabel>
                    Email
                    <Input type="email" name="email" />
                </FormLabel>
                <FormLabel>
                    Password
                    <Input type="password" name="password" />
                </FormLabel>
                <Button type="submit">Register</Button>

                {error?.response?.data?.errors?.password?.message && (
                    <Alert mt="2" status="error">
                        <AlertIcon />
                        <AlertTitle>Try another password.</AlertTitle>
                    </Alert>
                )}
                {error?.response?.data?.name && (
                    <Alert mt="2" status="error">
                        <AlertIcon />
                        <AlertTitle>Try another e-mail.</AlertTitle>
                    </Alert>
                )}
            </Box>
        </Box>
    );
};
