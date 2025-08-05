import React from 'react';
import { Container } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';


import NotFoundPage from './pages/NotFoundPage.tsx';
const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path:'/register',
    element:<RegisterPage/>
  }
])

const App: React.FC = () => {
  return (
    <Container>
      <RouterProvider router={router}/>

   
    </Container>
  );
};

export default App;
