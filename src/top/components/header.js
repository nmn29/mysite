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
        <img className="icon-h" src={Icon} />
      </motion.div>
    </header>
  );
}