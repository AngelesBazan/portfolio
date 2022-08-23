import React from 'react';
import Main from "../components/main/Main";
import Sidebar from '../components/sidebar/Sidebar';
import "../styles/home.css";

const Home = () => {
  return (
    <div className='home-container'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Home