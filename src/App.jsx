import React from 'react';

import useMouseLight from "./hooks/useMouseLight.jsx";

import Wave from "./components/Wave.jsx";

import './styles/main.scss';
import {FaBook, FaBuilding} from "react-icons/fa";
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
                    <p className={"giga bold"}>Fabrício Alves Trude</p>
                    <p id="study" className={"big"}>Computer Engineer Student, <span className="grey" >React and JavaScript enthusiast!</span> </p>
                </div>
                <Wave color="#070b1a"/>
            </div>

            <div className="section" id="about">
                <div className="about">
                    <div className="about-title">
                        <p className="title">A</p>
                        <p className="title white">bout me</p>
                    </div>
                    <div className="about-content justify">
                        <span className="grey" ><span className={"title-start"}/> Hello, I'm Fabrício Trude, or just Fatrude! I am 20, a new developer, and currently on my  5th semester of University I have gathered experience through making projects for both College and other classes/courses.<br/>
                        <span className="text-start"/>I give all of me in every project I do! My expertise lies within <span className={"cyan"}>React and JavaScript</span>, I've also done many projects in <span className="cyan">C</span>, and recently I've been working on sharpening my <span className={"cyan"}>Java</span> skills <br/>
                        <span className="text-start"/>I  value <span className={"purple"}>cleanliness, creativity and high-quality code</span>, I am extremely passionate about making aesthetically pleasing websites and apps that truly impact those who utilize it </span>
                    </div>
                </div>
                <Wave color="#070b1a"/>
            </div>

            <div className="section" id="experiences">
                <div className="section-wrapper">
                    <p className={"title"}>Experiences & Education</p>
                    <div className="experience-wrapper">
                        <p className="big white bold space-b20">Experience</p>

                        <div className="experience-title">
                            <div className="experience-icon">
                                <FaBuilding />
                            </div>
                            <div className="experience-title-content">
                                <p className="experience-name">Bilingual Content Moderation Expert</p>
                                <p className="experience-time monospace">2024 Oct - Present</p>
                            </div>
                        </div>
                        <p className="experience-title-end">Social Media - Teleperformance</p>
                        <div className="experience-list">
                            <ul className="list justify">
                                <li className="monospace">Reviewed and analyzed over 100,000+ cases across diverse and sensitive contexts</li>
                                <li className="monospace">Developed high accuracy, speed and attention to detail under pressure and strict time conditions</li>
                                <li className="monospace">Quickly adapted to constantly evolving policies and tools with minimal downtime</li>
                                <li className="monospace">Worked closely with team members to maintain alignment and improve decision  consistency</li>
                                <li className="monospace">Built strong resilience and emotional control while working under constant change and high workload</li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-wrapper" id="education">
                        <p className={"big white bold space-b20"}>Education</p>
                        <div className="experience-title">
                            <div className="experience-icon">
                                <FaBook/>
                            </div>
                            <div className="experience-title-content">
                                <p className="experience-name">Bachelor in Computer Engineering</p>
                                <p className="experience-time monospace">2024 - late 2028</p>
                            </div>
                        </div>
                        <p className="experience-title-end">Faculdades Metropolitanas Unidas - FMU</p>
                        <div className="experience-list space-b50">
                            <ul className="list justify">
                                <li className="monospace">Developed strong problem-solving skills through continuous practice in programming and logic challenges
                                </li>
                                <li className="monospace">Built academic projects in C, Python, Java and Assembly</li>
                                <li className="monospace">Applied theoretical concepts such as data structures and algorithms into practical coding exercises
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Wave color="#070b1a"/>
            </div>

            <div className="section" id="projects">
                <div className="projects-wrapper">
                    <p className={"title space-t30 space-b50"}>Projects</p>
                    <div className="projects-list">
                        <div className="project-item">a</div>
                    </div>
                </div>
                <Wave color="#060a14"/>
            </div>
            <div className="section" id="contacts">
                a
                <Wave color="#070b1a"/>
            </div>
        </div>
    </div>
};

export default App;
