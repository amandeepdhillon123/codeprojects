import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from "react-icons/md"
const Education = () => {
  return (
   <>
   <div className=" education">
   <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
           Education
        </h2>
        <hr />
    
   </div>
   <VerticalTimeline>
   <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2011 - 2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">B.tech</h3>
    <h4 className="vertical-timeline-element-subtitle">IIET Kinana Haryana IN</h4>
    
  </VerticalTimelineElement>
        </VerticalTimeline>
   </>
  )
}

export default Education