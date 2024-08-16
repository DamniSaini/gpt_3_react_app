import React from 'react';

import { Features, Blog, Possibility,Header,Footer,WhatGPT3} from './Container';
import {CTA, Brand,Navbar} from './Components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
          </div>
  )
}

export default App