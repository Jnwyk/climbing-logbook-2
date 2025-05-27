import { createContext, useState } from "react";

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext({
    userId: 1,
    changeUser: (selectedUserId: number) => {}
})

function UserContextProvider({children}: UserContextProviderProps){

    const [userId, setUserId] = useState<number>(1);

    const changeUser = (selectedUserId: number) => {
        setUserId(selectedUserId);
    }

    return (<UserContext value={{userId, changeUser}}>
        {children}
    </UserContext>);
}

export default UserContextProvider;