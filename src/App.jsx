import React, { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import('./pages/dashboard'))
const Login = lazy(() => import('./pages/auth/Login') )
import Layout from './layout/Layout'
function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
