import React from 'react'
import './About.css'
import about_img from '../../assets/about1.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlaystate}) => {
  return (

      <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about1-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlaystate(true)}}/>
            </div>
        
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2> Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a Transformative educational journey with our university's 
                comprehensive education programs.Our cutting-edges curriculum is 
                designed to empower students with knowledge,skillsneeded to excel in the dynamic 
                field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship,
                make a meaningful impact in classrooms and communities.</p>
            <p>Whether you aspire to become a Teacher, administration ,counselor,to achieve 
                offers the perfect your goals and unlock your full potential in the 
                future of education.</p>
        </div>
        
      </div>

  )
}

export default About
