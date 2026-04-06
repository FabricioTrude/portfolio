import React from 'react';
import projects from "../data/projects.js";
import {FaArrowRotateRight} from "react-icons/fa6";
import {FaExternalLinkAlt} from "react-icons/fa";

const Cards = () => {
    return <div className="projects-lists">
        {Object.entries(projects).map((list) => {
            return (<div className="project-list-wrapper" key={list[0]}>
                <p className="big bold uppercase" >{list[0]} Projects</p>
                <div className="project-list">
                    {list[1].map((project) => {
                        return (<div className={"card"} key={project.name}>
                            <div className="card-title big bold">
                                {project.name}
                            </div>
                            <div className="card-image">
                                <img src={project.images[0]} alt={project.name}/>
                                <div className="card-buttons">
                                    <FaExternalLinkAlt/>
                                    <FaArrowRotateRight/>
                                </div>
                            </div>
                        </div> )
                    })}
                </div>
            </div>)
        })}
    </div>
};

export default Cards;
