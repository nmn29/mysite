import "../stylesheet/header.css"
import Icon from "../images/icon.png"
import { motion } from "framer-motion"

export default function header(){
  return(
    <header>
      <motion.div
        whileHover={{
          scale: 1.1
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="/"><img className="icon-h" src={Icon} /></a>
      </motion.div>
    </header>
  );
}