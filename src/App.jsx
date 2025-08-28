
import { Navbar } from './components/Navbar'
import { Form } from './components/Form'
import { Home } from './components/Home'
import './App.css'
import { Card } from './components/Card'
import { Login } from './components/Login'
import { Read } from './components/Read'
import { Api } from './components/Api'
import { ProtectedRoute } from './components/ProtectedRoute'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/read/:readId',
    element: <Read />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/api",
    element: <Api />
  },
])

function App() {

  return <RouterProvider router={routes} />

}

export default App
