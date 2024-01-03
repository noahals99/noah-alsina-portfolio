import NavMenu from "./NavMenu"
import { useState,useEffect,useRef } from "react"
import { useInView } from 'react-intersection-observer';
import emailjs from "@emailjs/browser";
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
    const aboutSectionRef = useRef();
    const projectSectionRef = useRef();
    const contactSectionRef = useRef();
    const [ aboutRef, aboutInView ] = useInView();
    const [ projectRef, projectInView ] = useInView();
    const [ contactRef, contactInView ] = useInView();
    const [ messageName, setMessageName ] = useState();
    const [ messageEmail, setMessageEmail ] = useState();
    const [ messageContents, setMessageContents ] = useState();
    const [loading, setLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => emailjs.init("l0lchPlrzjwaLTjPU"), []);

    const handleAboutClick = () => {
        aboutSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        })
    }

    const handleProjectClick = () => {
        projectSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        })
    }

    const contactProjectClick = () => {
        contactSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        })
    }

    const sendAnotherHandle = () => {
        setMessageName();
        setMessageEmail();
        setMessageContents();
        setEmailSent(false);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_sufkfbh";
        const templateId = "template_dye3zga";
        try {
          setLoading(true);
          await emailjs.send(serviceId, templateId, {
           from_name: messageName,
           from_email: messageEmail,
           message: messageContents
          });
        } catch (error) {
          console.log(error);
        } finally {
            setEmailSent(true);
          setLoading(false);
        }
      };

    return(
        <>
            <div id="content-display-container">
                <div id="about-section" ref={aboutSectionRef}>
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
                <div id="project-section" ref={projectSectionRef}>
                    <p className="section-title" ref={projectRef}>Projects</p>
                    <div id="project-card-conatiner">
                        <ProjectDisplay title="Jasper's Earrings" description="Online storefront for my partners earring business." githubUrl="https://github.com/noahals99/jaspers-earrings" url="https://jaspers-earrings.netlify.app/"/>
                    </div>
                    
                </div>
                <div id="contact-section">
                    <p className="section-title" ref={contactRef}>Get in contact</p>
                    {emailSent ? (
                            <>
                                <p className="email-sent-alert">Email sent!</p>
                                <p className="email-send-another" onClick={sendAnotherHandle}>Send another?</p>
                            </>
                    ): (
                        <form id="contact-form" onSubmit={handleSubmit} ref={contactSectionRef}>
                            <p id="email-title">Name</p>
                            <input type="text" id="email-input" onChange={(e) => setMessageName(e.target.value)}></input>
                            <p id="email-title">Email</p>
                            <input type="text" id="email-input" onChange={(e) => setMessageEmail(e.target.value)}></input>
                            <p id="message-title">Message</p>
                            <textarea id="message-input" onChange={(e) => setMessageContents(e.target.value)}></textarea>
                            <input type="submit" id="submit-input"></input>
                        </form>
                    )}
                    
                    
                </div>
            </div>
            <NavMenu aboutInView={aboutInView} projectInView={projectInView} contactInView={contactInView} handleAboutClick={handleAboutClick} handleProjectClick={handleProjectClick} contactProjectClick={contactProjectClick}/>
        </>
    )
}

export default ContentDisplay