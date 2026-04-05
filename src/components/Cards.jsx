import React from 'react';
import projects from "../data/projects.js";

const Cards = () => {
    return <div className="projects-lists">
        {Object.entries(projects).map((list) => {
            return (<div className="project-list-wrapper" key={list[0]}>
                <p className="big bold uppercase" >{list[0]} Projects</p>
                <div className="project-list">
                    {list[1].map((project) => {
                        return (<div className={"card"} key={project.name}>
                            {project.name}
                        </div> )
                    })}
                </div>
            </div>)
        })}
    </div>
};

export default Cards;
