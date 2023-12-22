
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import AuthProvider from './providers/AuthProvider';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Root from './layout/Root';
import PrivateRoutes from './providers/PrivateRoutes';
import CreateTask from './pages/CreateTask';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
      },
      {
        path: '/createTask',
        element: <PrivateRoutes><CreateTask></CreateTask></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

       <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  
)
