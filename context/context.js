import { createContext, useState, useEffect, Children } from "react";



export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({Children}) => {
    const word = "hello"
    return(
        <CoinMarketContext.Provider value={{word}}>
            {Children}
        </CoinMarketContext.Provider>        
        
    )
    
}