import { Link } from "react-router-dom";
import "../stylesheet/pages.css"
import { motion } from "framer-motion";
import { Fade } from 'react-reveal'

export default function pages(){

  return(
    <div className="pages">
      <ul>
        
        {/*一つ分の記事のコード*/}
        <motion.div whileHover={{scale: 1.05}} whileTap={{ scale: 0.95 }}>
          <Fade bottom>
            <Link to="./page1">
              <li className="page1">
                <img src="https://twemoji.maxcdn.com/v/latest/svg/1f44d.svg"/>
                <h1>個人サイト作ってみました</h1>
                <h2>2022-05-17</h2>
              </li>
              </Link>
          </Fade>
        </motion.div>
        {/*ここまで*/}

      </ul>
    </div>
  );

}