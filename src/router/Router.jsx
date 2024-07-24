import { Route, Routes } from "react-router-dom"

import HomePage from "src/pages/HomePage"
import PageNotFound from "src/pages/404"
import AdminPage from "src/pages/AdminPage"
import AuthPage from "src/pages/AuthPage"
import Dashboard from "src/pages/Dashboard"

function Router() {
  return (
    <Routes>
    <Route index element={<HomePage/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/Auth" element={<AuthPage/>}/>
    <Route path="/admin" element={<AdminPage/>}/>
    <Route path="/*" element={<PageNotFound/>}/>
  </Routes>
  )
}

export default Router
