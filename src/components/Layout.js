import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Suspense } from "react";
import { Container } from "@chakra-ui/react";

export const Layout = () => {
    return (
        <Container maxW="container.lg">
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Container>
    );
};
