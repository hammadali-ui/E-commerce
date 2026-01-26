import { createContext } from "react";

// 1 Step
export const BioContext = createContext();

// 2nd Step
export const BioProvider = ({children})=>{
    const myName = "hammad";
    const myAge = 23; 
    // console.log(childern);
    

    return <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>
}