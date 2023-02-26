import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { URL_BACKEND } from './constance'
export const GlobalState = createContext()
export const DataProvider = ({ children }) => {
    const [token, setToken] = useState(false)
    useEffect(() => {
       
    }, [])


    return (<GlobalState.Provider value={'12'}>
        {children}
    </GlobalState.Provider>)
} 