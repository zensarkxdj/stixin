import React from 'react'
import certificate from "../assets/images/certificate.jpg"
import Image from 'next/image';
const Certificates = () => {
  return (
    <div className="about">
      <div className="about-head">
        <span className="about-title">CERTIFICATES AND AWARDS</span>
        
      </div>
      <div className="about-des">
      <Image src={certificate}  className='cer-img'></Image>

      </div>
    </div>
  );
}

export default Certificates