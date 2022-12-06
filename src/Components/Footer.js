import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "../Syles/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <LinkedInIcon 
        onClick={() => window.open('https://www.linkedin.com/in/devfreddysandoval/', '_blank')}
        />
     
        </div>
        <p> &copy; 2022 freddysandoval.com </p>

    </div>
  )
}


export default Footer