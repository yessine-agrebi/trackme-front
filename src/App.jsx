import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Login = lazy(() => import("./pages/auth/Login"));
const Layout = lazy(() => import("./layout/Layout"));
const ListOfUser = lazy(() => import("./pages/users/ListOfUser"));
const AddUsers = lazy(() => import("./pages/users/AddUsers"));
const MarkerMap = lazy(() => import("./pages/map/MarkerMap"));
const DevicesList = lazy(() => import("./pages/device/DevicesList"));
const AddDevice = lazy(() => import("./pages/device/AddDevice"));
const CarsList = lazy(() => import("./pages/car/CarsList"));
const AddCar = lazy(() => import("./pages/car/AddCar"));
import { ProtectedRoute } from "./utils/ProtectedRoutes";

function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute element={<Layout />} />}>
          <Route
            path="dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route
            path="listofusers"
            element={<ProtectedRoute element={<ListOfUser />} />}
          />
          <Route
            path="addusers"
            element={<ProtectedRoute element={<AddUsers />} />}
          />
          <Route
            path="markermap"
            element={<ProtectedRoute element={<MarkerMap />} />}
          />
          <Route
            path="listofdevices"
            element={<ProtectedRoute element={<DevicesList />} />}
          />
          <Route
            path="adddevice"
            element={<ProtectedRoute element={<AddDevice />} />}
          />
          <Route
            path="listofcars"
            element={<ProtectedRoute element={<CarsList />} />}
          />
          <Route
            path="addcar"
            element={<ProtectedRoute element={<AddCar />} />}
          />

          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
