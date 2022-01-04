//Know something about myself 
import React from 'react';

function About() {
    return (
        <div className="container" id="about">

            <div className="container pt-2">
                <div className="row pt-5">
                <div className="col-lg-6 mx-auto pt-5">
                After prioritizing family and motherhood for few years I am back to doing what I love the most, coding and building applications.<br/> Completed <b>Full Stack Bootcamp</b> program at UC Berkeley.<br/> I am proficient at CSS, HTML, Javascript, Node.js, jQuery, Bootstrap, MySQL, MongoDB, Express.js and React.js.<br/> I have previously worked in the technology industry for almost 7 years as a developer on Microsoft technologies such as ASP.Net[c#], SharePoint, SQL, SharePoint designer.<br />
                
                </div>
                <div className="col-lg-6 mx-auto pt-5">
                
                <img src="images/namita.jpg" className="avatar-img img-thumbnail rounded-circle mx-auto"  alt="Namita "/> 
                </div>
                <div id="iconScrollDownContainer">
        	<div id="iconScrollDown"></div>
        </div>
                </div>
            </div>
        </div>
    );
}
export default About;