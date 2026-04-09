import React, {useEffect, useRef, useState} from 'react';
import projects from "../data/projects.js";
import {FaArrowRotateRight} from "react-icons/fa6";
import {FaExternalLinkAlt, FaLink} from "react-icons/fa";
import useCardScroll from "../hooks/useCardScroll.jsx";

const Cards = () => {
    return <div className="projects-lists">
        {Object.entries(projects).map((list) => {
            const {listRef, thumbRef} = useCardScroll();
            return (<div className="project-list-wrapper" key={list[0]}>
                <p className="big bold uppercase" >{list[0]} Projects</p>

                <div className="project-list" ref={listRef}>
                {list[1].map((project) => (
                    <Card key={project?.name} project={project}/>
                ))}
                </div>

                <div className="scrollbar">
                    <div className="thumb" ref={thumbRef}></div>
                </div>
            </div>
            )
        })}
    </div>
};

const Card = ({project}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isTurned, setIsTurned] = useState(false);
    const hoveredRef = useRef(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if(!hoveredRef.current) setCurrentImage((prev) => (prev + 1) % project?.images?.length);
        }, 3000);
        return () => clearInterval(intervalRef.current);
    }, [project?.images?.length]);

    return (<div className="card"
         onMouseEnter={() => hoveredRef.current = true}
         onMouseLeave={() => hoveredRef.current = false}>
        <div className={`card-inner ${isTurned ? "turned" : ""}`}>
            <div className="card-front">
                <div className="card-title big bold">{project?.name}</div>
                <div className="card-image">
                    <img src={project?.images?.[currentImage]} alt={project?.name} />
                </div>
                <div className="card-buttons">
                    <a href={project?.link} target="_blank" rel="noreferrer"><FaLink /></a>
                    <FaArrowRotateRight onClick={() => setIsTurned(!isTurned)} />
                </div>
            </div>
            <div className="card-back">
                <div className="card-title big bold">{project?.name}</div>
                <div className="card-description small">{project?.description}</div>
                <div className="card-buttons">
                    <a href={project?.link} target="_blank" rel="noreferrer"><FaLink /></a>
                    <FaArrowRotateRight onClick={() => setIsTurned(!isTurned)} />
                </div>
            </div>
        </div>

    </div>
    );
}

export default Cards;
