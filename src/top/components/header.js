import "../stylesheet/header.css";
import Icon from "../images/icon.jpg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function header(){

  return(
    <div>
      <div className="header">
        <motion.div whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }}>
          <Link to="/"><img className="icon-h" src={Icon} /></Link>
        </motion.div>
        <ul className="link-l">
          <li className="g-link">
            <a href="https://github.com/nmn29" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
          </li>
          <li className="t-link">
            <a href="https://twitter.com/nama_nmn29" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
          </li>
        </ul>
      </div>
      <div className="header-link">
        <ul>
          <Link to="../blog"><li>Blog</li></Link>    
          <Link to="../works"><li>Works</li></Link>      
        </ul>
      </div>
    </div>
  );
}