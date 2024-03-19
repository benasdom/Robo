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
            <div className="headtext" data-word="Robotics">
                <div className="headtext1 htextactive">
                    Robotics
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
        <div className="options"><a href="https://benasdom.github.io/documentation/" target="_blank" className="more">
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
                    <div className='template'><div className="iconbox"><i className="fa fa-gear"></i></div><li>We create responsive and interactive designs that keep users engaged</li></div>
                    <div className='template'><div className="iconbox"><i className="fa fa-book"></i></div><li> We use the best UI/UX practices to get you the best </li></div>
                    <div className='template'><div className="iconbox"><i className="fa fa-brush"></i></div><li> We use AI generative logic to communicate with your audience through your page content</li></div>
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
        <p className="parat">
            <ul className="list">
                <li>SEO optimisation,XML sitemaps,web and mobile development</li>
                <li>Front-end, Back-end, Cloud Hosting, Email Routing,DNS Management</li>
                <li>Python, Javascript, Sql, React JS, React Native,DJango, Laravel .etc</li>
            </ul>
        </p>
        <p className="para3">Performance</p>
        <p className="parat">
           <ul className="list">
            <li>Loading Speed, Best loading practices, Efficient CLI</li>
            <li>User interaction, Component Rendering, Error handling</li>
           </ul>
        </p>
        <p className="para2">Security</p>
        <p className="parat">
            <ul className="list">
                <li>SSL, TLS etc</li>

            </ul>
         </p>
    </div>
    <div className="right">
        <img className="phone" src="./img/cups.png"/>
    </div>
    </div>
    <div className="start"><a  href="https://benasdom.github.io/ue-clientInputs/" target="_blank" className="getstarted">I need a website</a></div>
</div>


</>
    )
}

 