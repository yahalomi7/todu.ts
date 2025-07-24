import React from 'react'
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <>
    <Navbar />
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>ברוכים הבאים לכדורגל קריית שלום</h1>
        <h1>המקום בו השחקנים הגדולים נפגשים לערב קרבי אחד</h1>
    </Container>
    </>
  )
}
