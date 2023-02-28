import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { URL_BACKEND } from './constance'
export const GlobalState = createContext()
export const DataProvider = ({ children }) => {
    const [cartItems, setCartItem] = useState([{ item: {}, count: 0, size: '' }])
    const [sum, setSum] = useState(0)
    
    let addToCart = (product, count, size) => {
        if ((sum + count) < 10) {
            setSum(sum + count)
            let cart = { product, count, size }
            setCartItem(cartItems.concat(cart))
        }
        else alert('Giỏ hàng không được vượt quá 10')
    }
    return (<GlobalState.Provider value={{ cartItems, addToCart, sum }}>
        {children}
    </GlobalState.Provider>)
} 