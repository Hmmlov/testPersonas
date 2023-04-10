import UserContext from './UserContext'

export const UserState = ({children}) => {
  return (
    <UserContext.Provider value={{hola: 'vacio'}}>
        {children}
    </UserContext.Provider>
  )
}
