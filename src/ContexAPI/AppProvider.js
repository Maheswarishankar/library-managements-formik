import React, {createContext,useContext, useState } from 'react'
import { MotivationData } from '../Data/MotivationData';
import {AbdulkalamData} from '../Data/AbdulkalamData';
import {TamilData}from '../Data/TamilData';
import{EnglishData}from'../Data/EnglishData'


//step 1 create a contex

const AppContext = createContext();
const AppProvider = ({children}) => {
    const [motivation,setMotivation] = useState(MotivationData);
    const [APJBooks,setAPJBooks] = useState(AbdulkalamData);
    const [tamilbook,setTamilBook]=useState(TamilData);
    const [englishbook,setEnglishBook]=useState(EnglishData);   

    //step 2 create provider subscribe model

  return (
    <AppContext.Provider
    value = {{
        motivation,
        setMotivation,
        APJBooks,
        setAPJBooks,
        tamilbook,
        setTamilBook,
        englishbook,
        setEnglishBook       
    }}>
        {children}
    </AppContext.Provider>
    
  )
}
// step 3 use the context
export const Appstate = ()=>{
    return useContext(AppContext)
}

export default AppProvider