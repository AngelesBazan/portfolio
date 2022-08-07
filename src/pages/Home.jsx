import React from 'react';
import Main from "../components/main/Main";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      {/* sidebar si es dektop, header si no lo es */}
      <Main />
    </>
  )
}

export default Home