"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Wrapper = ({children}) => {
  return (
    <div>
        <Provider store={store} >
        {children}
        <ToastContainer/>
        </Provider>
    </div>
  )
}

export default Wrapper