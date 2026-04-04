import React from 'react';

import useMouseLight from "./hooks/useMouseLight.jsx";

import Wave from "./components/Wave.jsx";

import './App.css';
import {FaBuilding} from "react-icons/fa";
const App = () => {
    useMouseLight();

    return <div className="app">
        <div className="portfolio">
            <div className="section" id="presentation">
                <div className="presentation">
                    <div className="hovers">
                        <div className="hover">A</div>
                            <div className="hover">B</div>
                        <div className="hover">C</div>
                        <div className="hover">D</div>
                    </div>
                    <p id="hey" className={"title"}>Welcome! I'm</p>
                    <p id="name">Fabrício Alves Trude</p>
                    <p id="study">Computer Engineer Student, <span id="grey" >React and JavaScript enthusiast!</span> </p>
                </div>
                <Wave color="#070b1a"/>
            </div>
            <div className="section" id="about">
                <div className="about">
                    <div className="about-title">
                        <p className="title">A</p>
                        <p className="title" style={{color: "white"}}>bout me</p>
                    </div>
                    <div className="about-content">
                        <span id="grey" ><span id={"text-start"}/> Hello, I'm Fabrício Trude, or just Fatrude! I am 20 and a new developer, I have gathered experience through the projects I made for College and Classes, I'm currently in 5th Semester of University and I haven't made any big project yet, but I give all of me in every project I do! My expertise lies within <span id={"cyan"}>React and JavaScript</span>, but I made many projects in C for College, soon enough  I will be specializing myself in <span id={"text-start"}/><span id={"cyan"}>Java</span> too!         I  value <span id={"purple"}>cleanness, creativity and high-quality code</span>, I am extremely passionate about making aesthetically pleasing websites and apps that truly impact those whom utilize it </span>
                    </div>
                </div>
                <Wave color="#070b1a"/>
            </div>
            <div className="section" id="experiences_education">
                <div className="wrapper">
                    <div id="experiences">
                        <div className="experience">
                        <p className={"title"}>Experiences & Education</p>
                            <p className="title">Experience</p>
                            <div className="experience-title">
                                <div className="experience-icon">
                                    <FaBuilding />
                                </div>
                                <div className="experience-title-content">
                                    <p className="experience-name" id={"cyan"}>Bilingual Content Moderation Expert</p>
                                    <p className="experience-time monospace">2024 Oct - Present</p>
                                </div>
                            </div>
                                <p className="experience-title-end">Social Media</p>
                            <div className="experience-list">
                                <ul className="list">
                                    <li className="monospace">Reviewed and analyzed over 100,000+ cases across diverse and sensitive contexts</li>
                                    <li className="monospace">Developed high accuracy, speed and attention to detail under pressure and strict time conditions</li>
                                    <li className="monospace">Quickly adapted to constantly evolving policies and tools with minimal downtime</li>
                                    <li className="monospace">Worked closely with team members to maintain alignment and improve decision  consistency</li>
                                    <li className="monospace">Built strong resilience and emotional control while working under constant change and high workload</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="education">
                        <div className="education">
                            <h2>Education</h2>
                            <div className="education-title">
                                <h3>Bachelor of Science in Computer Engineering</h3>
                                <p>2021 - 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Wave color="#070b1a"/>
            </div>
            <div className="section" id="projects">
                a
                <Wave color="#070b1a"/>
            </div>
            <div className="section" id="contacts">
                a
                <Wave color="#070b1a"/>
            </div>
        </div>
    </div>
};

export default App;
