
import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import projectList from "../projectList.json";

class Project extends Component{

    state = {
        // Setting this.state.avengersList to the avengers json array
        projectList
    }
        // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
        <div>

            <div className="container mt-4 mb-4" id="projects" >
            <h1 className="contentHeader pt-5 text-center">What I have been up to ? Oh not much....</h1>
            <hr className="my-4" />
                <div className="card">
                    <div className="card-body">
                        <div className="card-deck">
                            {/* Loop through all the items in the static list  */}
                            {this.state.projectList.map(project => (
                                <ProjectCard
                                    id={project.id}
                                    keywords={project.keywords}
                                    desc={project.desc}
                                    title={project.title}
                                    image={project.image}
                                    demoLink={project.demoLink}
                                    repo={project.repo}
                                />
                               
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
  }
}

export default Project;