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
import { ProtectedRoute } from './utils/ProtectedRoutes'
import CarsList from './pages/car/CarsList'
import AddCar from './pages/car/AddCar'
function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<ProtectedRoute element={<Layout />} />} >
          <Route path="dashboard" element={<ProtectedRoute element={<Dashboard />} />}  />
          <Route path="listofusers" element={<ProtectedRoute element={<ListOfUser />} />}  />
          <Route path="addusers" element={<ProtectedRoute element={<AddUsers />} />}  />
          <Route path="markermap" element={<ProtectedRoute element={<MarkerMap />} />}  />
          <Route path="listofdevices" element={<ProtectedRoute element={<DevicesList />} />}  />
          <Route path="adddevice" element={<ProtectedRoute element={<AddDevice />} />}  />
          <Route path="listofcars" element={<ProtectedRoute element={<CarsList />} />}  />
          <Route path="addcar" element={<ProtectedRoute element={<AddCar />} />}  />
          
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
