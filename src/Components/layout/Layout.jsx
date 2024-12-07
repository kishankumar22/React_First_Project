import React from 'react'
import Header from '../header';
import Footer from '../Footer';
import Slider from './Slider';
const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <Slider />
        <div className='content'>
            {children}
        </div>
      <Footer/>
    </div>
  )
}

export default Layout
