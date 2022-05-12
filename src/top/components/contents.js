import "../stylesheet/contents.css";
import {Fade} from 'react-reveal'
import Icon from "../images/icon.png"
import {motion} from 'framer-motion'

export default function contents(){ 
  return(
    <div className="contents">
      <div className="about-fadeup">
        <div className="about">
          <ul>
            <li className="icon-l">
            <div className="icon">
              <motion.div
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="/"><img className="icon-c" src={Icon} /></a>
              </motion.div>
            </div>
            </li>
            <li>
                <div className="aboutus">
                  <Fade bottom><h1>about us</h1></Fade>                 
                  <Fade bottom><p>namaです</p></Fade>                 
                  <Fade bottom><p>駆け出しエンジニアの学生です</p></Fade>                 
                  <Fade bottom><p>よろしくお願いします</p></Fade>                 
                </div>
            </li>
            </ul>      
        </div>
      </div>
    </div>
  );
}