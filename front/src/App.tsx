import React from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';


const App: React.FC = () => {
  return (
    <Container>
     <HomePage/>
   
    </Container>
  );
};

export default App;
