import { motion } from "framer-motion"


function NavMenu({aboutInView, projectInView, contactInView}){
    return(
        <div className="nav-menu-container">
            <div className="nav-item-conatiner">
                <p className="nav-item">About</p>
                {aboutInView ? (
                    <motion.div className="selected-bar" initial={{width:'0%'}} animate={{width:"100%"}}></motion.div>
                ):(<motion.div className="selected-bar" initial={{width:'100%'}} animate={{width:"0%"}}></motion.div>)}
            </div>
            <div className="nav-item-conatiner">
                <p className="nav-item">Projects</p>
                {projectInView ? (
                    <motion.div className="selected-bar" initial={{width:'0%'}} animate={{width:"100%"}}></motion.div>
                ):(<motion.div className="selected-bar" initial={{width:'100%'}} animate={{width:"0%"}}></motion.div>)}
            </div>
            <div className="nav-item-conatiner">
                <p className="nav-item">Contact</p>
                {contactInView ? (
                    <motion.div className="selected-bar" initial={{width:'0%'}} animate={{width:"100%"}}></motion.div>
                ):(<motion.div className="selected-bar" initial={{width:'100%'}} animate={{width:"0%"}}></motion.div>)}
            </div>
        </div>
    )
}

export default NavMenu