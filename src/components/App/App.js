import React from 'react'
import Home from '../pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Header from '../pages/Header/Header'

import Registr from '../pages/registration/Registr'

const App = () => {
  return (
    <>
    	<Header/>
			<Routes>
				<Route path="/" element={<Registr/>} />
				<Route path="/home" element={<Home />} />

			
			</Routes>
			
    </>
  )
}

export default App
