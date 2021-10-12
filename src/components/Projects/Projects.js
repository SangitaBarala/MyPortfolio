import './Projects.scss'
import {useState} from "react";
import {projectList} from "./ProjectList";

const Projects = () => {
    const [list, setList] = useState("")
    return(
        <div className="projects" id="project">
            <h1>MY PROJECTS</h1>
            <section className="main-card--container">
                {projectList.map((currentItem, index)=>{
                    const {name,image,technologies,description,source} = currentItem
                    return(
                        <>
                            <div className="card-container">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={image} alt="image" className="card-media"/>
                                        <span className="card-author subtle">{name}</span>
                                        <span className="card-description subtle">Technologies: {technologies}</span>
                                        <br/>
                                        <span className="card-description subtle">{description}</span>
                                        <div>
                                            <span className="card-tag subtle">
                                                <a href={source}>Source Code</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </div>
    )
}
export default Projects