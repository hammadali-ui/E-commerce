import React from "react";
import userContext from "./UserContext";


const UserContextProvider = ({childern})=>{

    const[user,setUser] = React.useState(null)

    return(
        <userContext.Provider value={{user,setUser}}>
        {childern}
        </userContext.Provider>
    )

}

export default UserContextProvider
