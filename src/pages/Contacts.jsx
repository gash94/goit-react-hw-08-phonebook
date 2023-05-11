import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { fetchContacts } from "../redux/contacts/operations";

const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <ContactForm />
            <Filter />
            <ContactList />
        </>
    );
};
// const Contacts = () => {
//     const dispatch = useDispatch();
//     const isLoading = useSelector(getIsLoading);

//     useEffect(() => {
//         dispatch(fetchContacts());
//     }, [dispatch]);
//     return (
//         <>
//             <ContactForm />
//             <Filter />
//             <MutatingDots
//                 height="100"
//                 width="100"
//                 color="#000"
//                 secondaryColor="#000"
//                 radius="15"
//                 ariaLabel="mutating-dots-loading"
//                 wrapperStyle={{}}
//                 visible={isLoading}
//             />
//             <ContactList />
//         </>
//     );
// };
export default Contacts;
