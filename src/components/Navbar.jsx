import React from 'react'
import Hamicon from './Hamicon'

function Navbar({setCategory}) {
    return (
        <>
        <div className="nav">
        <div className="icons">
            <Hamicon setCategory={setCategory}  /> </div>
            <img src="https://www.marketingmind.in/wp-content/uploads/2018/02/Inshorts_logo.png" 
            style={{height:'60px'},{width:'60px'}}
            alt="m" />
        </div>
        </>
    )
}

export default Navbar
