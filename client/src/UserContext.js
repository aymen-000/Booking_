import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({})
export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [exist, setExist] = useState(false)
    useEffect(() => {
        if (!user) {
            axios.get('http://localhost:8800/api/profile' , {withCredentials:true})
                .then((result) => {
                    console.log('executed');
                    setUser(result.data);
                    setExist(true);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }, [])
    return <UserContext.Provider value={{ user, setUser, exist, setExist }}>{children}</UserContext.Provider>
}