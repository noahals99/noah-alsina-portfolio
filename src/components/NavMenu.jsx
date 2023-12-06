import { motion } from "framer-motion"


function NavMenu({aboutInView, projectInView, contactInView, handleAboutClick, handleProjectClick, contactProjectClick}){
    return(
        <div className="nav-menu-container">
            <div className="nav-item-conatiner">
                <p className="nav-item" onClick={handleAboutClick}>About</p>
                {aboutInView ? (
                    <motion.div className="selected-bar" initial={{width:'0%'}} animate={{width:"100%"}}></motion.div>
                ):(<motion.div className="selected-bar" initial={{width:'100%'}} animate={{width:"0%"}}></motion.div>)}
            </div>
            <div className="nav-item-conatiner">
                <p className="nav-item" onClick={handleProjectClick}>Projects</p>
                {projectInView ? (
                    <motion.div className="selected-bar" initial={{width:'0%'}} animate={{width:"100%"}}></motion.div>
                ):(<motion.div className="selected-bar" initial={{width:'100%'}} animate={{width:"0%"}}></motion.div>)}
            </div>
            <div className="nav-item-conatiner">
                <p className="nav-item" onClick={contactProjectClick}>Contact</p>
                {contactInView ? (
                    <motion.div className="selected-bar" initial={{width:'0%'}} animate={{width:"100%"}}></motion.div>
                ):(<motion.div className="selected-bar" initial={{width:'100%'}} animate={{width:"0%"}}></motion.div>)}
            </div>
        </div>
    )
}

export default NavMenu