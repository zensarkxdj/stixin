import React from 'react'
import  "../assets/styles/navbar.css"
import logo from "../assets/images/Logo.png"
import Image from 'next/image';  // Import the next/image component

function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <Image src={logo} height={60} width={250}></Image>
        </div>
    </div>
  )
}

export default Navbar