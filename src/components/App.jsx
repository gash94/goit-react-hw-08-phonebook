import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks";
import { Center, Spinner } from "@chakra-ui/react";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <Center pt="50vh">
            <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Center>
    ) : (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute
                            redirectTo="/contacts"
                            component={RegisterPage}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute
                            redirectTo="/contacts"
                            component={LoginPage}
                        />
                    }
                />
                <Route
                    path="/contacts"
                    element={
                        <PrivateRoute
                            redirectTo="/login"
                            component={ContactsPage}
                        />
                    }
                />
                <Route path="*" element={<HomePage />} />
            </Route>
        </Routes>
    );
};
