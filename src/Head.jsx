import React, { useState } from 'react'
export default function Head({activate,deactivate}) {
    
    const [courses, setcourses] = useState([... Array(20).fill({title:"Intro to Robotics", ratings:"5.0",details:" Learn how to make programme your own robots"})])

   return (
<>
 <div className="page">
    <div className="head">
        <div className="header">
            <div className="logob">
                        <img className="poster" src="./img/cups.png"  alt="" srcset=""/>

            </div>

        </div>
        <div className="head1 ">
            <div className="headtexta">
                <div className="htext">
                     📔 let's bot

                </div>

            </div>
            <div className="headtext" data-word="Wise Robotics">
                <div className="headtext1 htextactive">
                    Wise Robotics
                 </div>
                <div className="headtext2">s
                   &nbsp to Unity Elites
                </div>
                
                 </div>
        </div>
        </div>
        <div className="content">
            <div className="shown">
 {courses.map((a,b)=>{ return (
        <>
        <div className='flexed'>
        <div href="#" onmouseover="return activate(this)" data-cat="imgs" key={""+b} onmouseleave="return deactivate()" className="item">
    <div className="ctext">
        <div className='ctop'>{a.title}</div></div>
        <div className="options"><a href="" target="_blank" className="more">
 <span className='ratings'>{a.ratings}⭐</span></a></div>
 <div className="imgbox"><img className="image" src="./img/cups.png" /></div><div className="text">ue-movies</div></div>
 <div className="flexdown">
    {a.details}
 </div>
        </div>
            </>
    )})}
            
            </div>
        </div>
    <div className="quest">
        <div className="qleft">
            <p className="para"> - What we do ✊🏽 💫-</p>
            <p className="parat">
                <ul className="list">
                    <div className='template'><div className="iconbox"><i className="fa fa-gear"></i></div><li> A practical oriented approach to get you engaged and improve your skill</li></div>
                    <div className='template'><div className="iconbox"><i className="fa fa-book"></i></div><li> A procedural guide to acheive significant mile stones hence, Leading you to mastery </li></div>
                    <div className='template'><div className="iconbox"><i className="fa fa-brush"></i></div><li> Well optimised courses to cover everything you will need on your learning journey</li></div>
                </ul>

            </p>
           
    
        </div>
        <div className="qright">
        <div className="parat2">
            Wish to learn robotics? You are at the right place 🦾 🪛
            <img className="ui" src="./img/b1.png" alt="" srcset=""/>
           
           <img className="ui" src="./img/b2.png" alt="" srcset=""/>
            </div>
      
         
        </div>
        <div className="gets" >
            <a className="getst"  href="" target="_blank">
                Get started

            </a>
        </div>
    </div>
    <div className="questa">
    <div className="left">
        <p className="para1">Our specialty
             
        </p>
        <p className="sparagraph">
          Bringing to you a complete guide on your journey to learn everything you need about the course
        </p>
        <p className="para3">Performance</p>
        <p className="sparagraph"> 
        We aim to move you from the novice level to an expert level
        </p>
    </div>
    <div className="right">
        <img className="phone" src="./img/uepage.webp"/>
    </div>
    </div>
    <div className="start"><a  href="" target="_blank" className="getstarted">Let's get started</a></div>
</div>


</>
    )
}

 