import "../stylesheet/header.css"
import Icon from "../images/icon.png"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function header(){


  return(
    <div>
      <div className="header">
        <motion.div whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }}>
          <a href="/"><img className="icon-h" src={Icon} /></a>
        </motion.div>
        <ul className="link-l">
          <li className="g-link">
            <a href="https://github.com/nmn29"><FontAwesomeIcon icon={faGithubSquare} /></a>
          </li>
          <li className="t-link">
            <a href="https://github.com/nmn29"><FontAwesomeIcon icon={faTwitterSquare} /></a>
          </li>
        </ul>
      </div>
      <div className="header-link">
        <ul>
          <a href="/"><li>Blog</li></a>    
          <a href="/"><li>Works</li></a>      
        </ul>
      </div>
    </div>
  );
}