
import {createContext, useState} from "react";



//declare my context
export const MyContext = createContext();

//make ny provider Component
//pass yhe componert initial value



const ContextProvider = ({children}) => {
          const [state, setState] = useState("Hi!");

          const initialState ={
                    quote: "lem",
                    greeting: "cannady",
                    roomNumber: "15",
                    state,
                    setState
          }
          return (
          <MyContext.Provider value={initialState}>
          {children}
          </MyContext.Provider>
          );
};
export default ContextProvider;
