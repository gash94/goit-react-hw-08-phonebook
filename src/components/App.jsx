// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { MutatingDots } from "react-loader-spinner";

// import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";
// import { fetchContacts } from "../redux/contacts/operations";
// import { getIsLoading } from "../redux/contacts/selectors";

// import css from "./App.module.css";

// export const App = () => {
//     const dispatch = useDispatch();
//     const isLoading = useSelector(getIsLoading);

//     useEffect(() => {
//         dispatch(fetchContacts());
//     }, [dispatch]);

//     return (
//         <div className={css.app}>
//             <h1>Phonebook</h1>
//             <ContactForm />
//             <h2>Contacts</h2>
//             <div className={css.contactsBox}>
//                 <MutatingDots
//                     height="100"
//                     width="100"
//                     color="#000"
//                     secondaryColor="#000"
//                     radius="15"
//                     ariaLabel="mutating-dots-loading"
//                     wrapperStyle={{}}
//                     wrapperClass={css.loader}
//                     visible={isLoading}
//                 />
//                 <Filter />
//                 <ContactList />
//             </div>
//         </div>
//     );
// };
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks";

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
        <b>Refreshing user...</b>
    ) : (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute
                            redirectTo="/contacts"
                            component={<RegisterPage />}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute
                            redirectTo="/contacts"
                            component={<LoginPage />}
                        />
                    }
                />
                <Route
                    path="/contacts"
                    element={
                        <PrivateRoute
                            redirectTo="/login"
                            component={<ContactsPage />}
                        />
                    }
                />
            </Route>
        </Routes>
    );
};
