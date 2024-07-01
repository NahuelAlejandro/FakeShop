import React from 'react'
import Header from './Header'
import Footer from './Footer'

const LayoutMain = (props) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default LayoutMain