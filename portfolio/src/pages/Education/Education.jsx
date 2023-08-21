import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from "react-icons/md"
const Education = () => {
  return (
   <>
   <div className=" education" id='education'>
   <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
           Education Details
        </h2>
        <hr />
        <VerticalTimeline>
   <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2011 - 2016"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">B.tech mechanical</h3>
  
    <p className="vertical-timeline-element-subtitle">Indus Institue of Engineering and Technology 
            (Kurukshetra University)</p>
            <h4 className="vertical-timeline-element-subtitle">Jind Haryana(126102).
</h4>
    
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Higher secondary education </h3>
    <p className="vertical-timeline-element-subtitle">Haryana Board Of School Education (Bhiwani).
</p>
<h4 className="vertical-timeline-element-subtitle">Jind Haryana(126102).
</h4>
    
  </VerticalTimelineElement>
        </VerticalTimeline>
      
    
   </div>
  
   </>
  )
}

export default Education