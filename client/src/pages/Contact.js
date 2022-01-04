//Send me an email to check my social meadi links 
import React ,{Component } from 'react';

class Contact extends Component{
    render(){

    return (
        <div class="container pt-2 col-md-9 col-sm-10 mt-5 mb-5 bg-dark text-light" id="contact">
            <h1 className="contentHeader pt-5"><i class="fas fa-envelope-open-text"> </i> Contact Me </h1>
            <hr className="my-4" />
            <div class="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-10">
                        <div class="row">
                            <label> Email me at <a href="mailto:namita.shenai@gmail.com?Subject=Hello" class="text-danger"
                                target="_top"><i class="fas fa-envelope"></i></a> or connect with me on my social networks: </label>
                            <br />
                        </div>
                        <div class="row social-links">
                            {/* LinkedIn */}
                            {/* <a href="https://www.linkedin.com/in/namita-shenai/" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                            </a> */}
                            {/* Github */}
                            <a href="https://github.com/NVK2016" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                            </a>
                            {/* Medium Blog */}
                            <a href="https://medium.com/@namita.shenai" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-medium fa-2x" aria-hidden="true"></i>
                            </a>
                            {/* Resume */}
                            <a href="/resume/NamitaShenaiResume.pdf" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                            </a>
                            {/* Skype ID */}
                            <a href="https://join.skype.com/invite/yaENdmR5wx48" target="_blank" rel="noopener noreferrer"> <i class="fa fa-skype"aria-hidden="true"></i></a>
                        </div>
                    </div> 
                    {/* End of left column & begin of right column  */}
                    <div className="col-lg-6 col-md-6 col-sm-10 right-col">
                        <form action="mailto:namita.shenai@gmail.com" method="post" enctype="text/plain">
                            {/* <label className="contact-label">Name</label> */}
                            <input type="text" id="fname" name="firstname" placeholder="Your name" />
                            {/* <label className="contact-label" >Email</label> */}
                            <input type="email" id="email" name="email" placeholder="Your email" />
                            {/* <label className="contact-label" >Subject</label> */}
                            <textarea id="subject" name="subject" placeholder="Write something" rows="6"></textarea>
                            <input type="submit" value="Submit" />

                            
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
    }
}

export default Contact; 