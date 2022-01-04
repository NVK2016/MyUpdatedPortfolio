import React from "react";
import './style.css';

function ProjectCard(props) {
    const imgStyle = {
        "background-image": `url(${props.image})`
    }
    return (
        <div>

            <h3 className="text-info text-center">{props.title}</h3>

            <div className="flip">
                <div className="front " style={imgStyle}>
                </div>
                <div className="back">
                    <h6>{props.desc}</h6>
                    <p className="text-info">Built With : {props.keywords}</p>
                    <a href={props.demoLink} target="_blank" rel="noopener noreferrer"
                        className="text-monospace text-light">Demo Link</a>
                    <br />
                    <a href={props.repo} target="_blank" rel="noopener noreferrer" className="text-monospace text-warning"> Github Repo Link </a>
                    <br />
                </div>
            </div>

        </div>

    );
}

export default ProjectCard;