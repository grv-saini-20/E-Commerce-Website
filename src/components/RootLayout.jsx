import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomNavBar from './CustomNavBar'
import {Provider} from "react-redux"; 
import store from '../store/store';

function RootLayout() {
  return (
    <>
    <Provider store={store}>
    <CustomNavBar/>
    <main>
        <Outlet/>
    </main>
    </Provider>
    </>
  )
}

export default RootLayout