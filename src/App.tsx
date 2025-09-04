import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainDiv from './components/MainDiv'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <Header />
      <h1
        style={{
          justifyContent: "center",
          color: "#2c2f45",
          padding: "4rem",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        Designed For The Future
      </h1>
      <MainDiv />
      <Footer />
    </>
  );
}

export default App
