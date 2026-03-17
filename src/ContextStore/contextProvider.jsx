import { useEffect, useState } from "react";
import Newcontext from "./Newcontext";

function NewContextProvider({children}) {
    const [user , setUser] = useState(null)
  
    return(
        <Newcontext.Provider value={{user , setUser}}>
            {children}
        </Newcontext.Provider>
    )
}

export default NewContextProvider