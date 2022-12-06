import React from 'react'
import {VerticalTimeline , VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import '../Syles/Experience.css'

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
         date='2017-2018' 
         iconStyle={{background: "#3e497a", color: '#fff'}} 
         icon={<SchoolIcon />}> 
        
        <h3 className='vertical-timeline-element-title'> YearUp job training program, Boston MA </h3>
        <p>Software QA training certificate</p>
         
         </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--work'
         date='2018-2019' 
         iconStyle={{background: "#e9d35b", color: '#fff'}} 
         icon={<WorkIcon />}> 
        
        <h3 className='vertical-timeline-element-title'> Wayfair, Boston MA </h3>
        <p>Software QA Analyst L1</p>
         
         </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--work'
         date='2019-2022' 
         iconStyle={{background: "#e9d35b", color: '#fff'}} 
         icon={<WorkIcon />}> 
        
        <h3 className='vertical-timeline-element-title'> Wayfair, Boston MA </h3>
        <p>Software QA Analyst L2</p>
         
         </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
         date='2022-2022' 
         iconStyle={{background: "#3e497a", color: '#fff'}} 
         icon={<SchoolIcon />}> 
        
        <h3 className='vertical-timeline-element-title'> DevMountain, Lehi UT </h3>
        <p>Web Developement certificate</p>
         
         </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
  )
}

export default Experience