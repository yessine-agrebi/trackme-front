import React, { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import('./pages/dashboard'))
const Login = lazy(() => import('./pages/auth/Login') )
import Layout from './layout/Layout'
import ListOfUser from './pages/users/ListOfUser'
import AddUsers from './pages/users/AddUsers'
import MarkerMap from './pages/map/MarkerMap'
import DevicesList from './pages/device/DevicesList'
import AddDevice from './pages/device/AddDevice'
function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="listofusers" element={<ListOfUser />} />
          <Route path="addusers" element={<AddUsers />} />
          <Route path="markermap" element={<MarkerMap />} />
          <Route path="listofdevices" element={<DevicesList />} />
          <Route path="adddevice" element={<AddDevice />} />
          
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
