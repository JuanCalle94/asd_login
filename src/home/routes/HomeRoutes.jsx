import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Navbar } from '../../ui'
import { DataProvider } from '../context/DataContext'

export const HomeRoutes = () => {
  return (
    <>
      <DataProvider>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </DataProvider>
    </>
  )
}
