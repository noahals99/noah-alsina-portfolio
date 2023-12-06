import NavMenu from "./NavMenu"
import { useState,useEffect,useRef } from "react"
import { useInView } from 'react-intersection-observer';
import { InView } from "react-intersection-observer";

function ProjectDisplay({title, description, githubUrl, url, imgUrl}) {
    return(
        <a href={url} className="project-link" target="_blank">
            <div className="project-card">
                <p className="project-title">{title}</p>
                <p className="project-description">{description}</p>
                <a href={githubUrl} className="project-gh-link" target="_blank">
                    <img src="../Git-Icon-White.svg" className="project-gh-link-icon"/>
                </a>
                
            </div>
        </a>
    )
}


function LogoDisplay({url, title}){
    return(
        <div className="logo-card">
            <img src={url} className="logo"></img>
            <p className="icon-title">{title}</p>
        </div>
        
    )
}

function ContentDisplay(){
    const [ aboutRef, aboutInView ] = useInView();
    const [ projectRef, projectInView ] = useInView();
    const [ contactRef, contactInView ] = useInView();


    return(
        <>
            <div id="content-display-container">
                <div id="about-section">
                    <p className="section-title" ref={aboutRef}>ABOUT</p>
                    <p id="about-text">I have always been pulled towards the process of creating things in many different forms. Seeing how something you create impacts others, seeing your creation evolve over time, and seeing others make iterations off your work and enhance parts in ways you wouldn’t even consider. Not being particularly good at art from an early age, I found my outlet for creation to be engineering. I would build things such as computers or take things apart to learn how they were made. My love for engineering naturally led me to learn a programming language, that language being python. Nobody in my family knew anything about programming or what a career would look like if I decided to take that path, so I took a different path in college. My senior year of college I found the pull towards web development too strong and took the dive into strengthening my knowledge and using that knowledge to develop tangible products and satisfy that hunger for creation I had neglected for so long.</p>
                </div>
                <div id="logo-container">
                    <LogoDisplay url="../react.svg" title="REACT"/>
                    <LogoDisplay url="../Nodejs.svg" title="NODE.JS"/>
                    <LogoDisplay url="../javascript-logo.svg" title="JAVASCRIPT"/>
                    <LogoDisplay url="../html-logosvg.svg" title="HTML"/>
                    <LogoDisplay url="../Git-Icon-White.svg" title="GIT"/>
                    <LogoDisplay url="../mongodb.svg" title="MONGODB"/>
                    <LogoDisplay url="../expressjs-icon.svg" title="EXPRESS.JS"/>
                    <LogoDisplay url="../css-logo.svg" title="CSS"/>
                    <LogoDisplay url="../python-logo.svg" title="PYTHON"/>
                    <LogoDisplay url="../Flask_logo.svg" title="FLASK"/>
                    <LogoDisplay url="../mysql-icon.svg" title="MYSQL"/>
                </div>
                <div id="project-section">
                    <p className="section-title" ref={projectRef}>Projects</p>
                    <div id="project-card-conatiner">
                        <ProjectDisplay title="Earring online storefront" description="Online storefront for my partners earring business." githubUrl="https://github.com/noahals99/jaspers-earrings" url="https://jaspers-earrings.netlify.app/"/>
                    </div>
                    
                </div>
                <div id="conteact-section">
                    <from>
                        <input type="text"></input>
                        <input type="text"></input>
                        <input type="submit"></input>
                    </from>
                    
                </div>
            </div>
            <NavMenu aboutInView={aboutInView} projectInView={projectInView} contactInView={contactInView}/>
        </>
    )
}

export default ContentDisplay