import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import  GitHubIcon  from '@mui/icons-material/GitHub'
import '../Syles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi my name is Freddy </h2>
        <div className='prompt'>
          <p> A software developer with a passion for learning and creating

          </p>
<LinkedInIcon />
<EmailIcon />
<GitHubIcon />
           </div>
         </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
        <li className='item'>
          <h2>Front-End</h2>
          <span>
            JavaScript, HTML, CSS, React, BootStrap, MaterialUI
          </span>
        </li>
        <li className='item'>
          <h2>Back-End</h2>
          <span>
          NodeJS, Express, Heroku, PostgressSQL, Axios
          </span>
        </li>
        <li className='item'>
          <h2>Languages</h2>
          <span>
JavaScript, Java, Swift,
          </span>
        </li>
        </ol>
         </div>
    </div>
  )
}

export default Home