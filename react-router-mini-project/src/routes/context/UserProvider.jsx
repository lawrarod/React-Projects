import { UserContext } from "./UserContext"

const user = {
    name: 'lawra',
    surname: 'rodríguez',
    technology: 'react',
    mail: 'law@law.com'
}


// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}
