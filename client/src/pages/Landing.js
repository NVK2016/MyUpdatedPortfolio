//this will be the default page
import React from 'react';
// import { Link} from "react-router-dom";


function Landing() {
    return (
        <div className="container" id="landing">

                <div >

                    <h1 className="landing-head">Namita Shenai</h1>
                    <hr className="my-4" />

                    <h3> FULL STACK WEB DEVELOPER </h3>
                    
                    <br/> 

                    <center><br /><br /><br />
                        <div class="loader" id="loader"></div>
                        <div class="loader" id="loader2"></div>
                        {/* <div class="loader" id="loader3"></div> */}
                        {/* <div class="loader" id="loader4"></div> */}

                        <a className="btn btn-primary btn-xl landing-a" href="#about">Find Out More</a>
                    </center>
                </div>
        </div>
    );
}
export default Landing;