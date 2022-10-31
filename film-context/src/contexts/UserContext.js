
import React, { createContext, useState } from 'react';

//Creo el context
const UserContext = createContext();

const initialUser = { 
    id: 1, 
    name: 'Matu', 
    favoriteMovies: [1,2,3]
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(initialUser);


    const login = () => {
        setUser(initialUser);
    };
    
    const logout = () => {
        setUser(null);
    };

    const data = { user, login, logout }
    
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;