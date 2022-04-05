
import React from "react"

import AuthContext from "./AuthContext"

function AuthContextProvider(props){
    const [isAuth, setIsAuth] = React.useState(false)
    return (
        <AuthContext.Provider value={{setIsAuth, isAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider