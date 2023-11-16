
import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangeListener } from "../../utils/Firebase/firebase.utils"



export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
});


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscrube = onAuthStateChangeListener((user) => {
            console.log("user", user);
            setCurrentUser(user);
        });
        return unsubscrube
    }, []);


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}