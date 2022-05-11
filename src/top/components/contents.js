import "../stylesheet/contents.css";
import {Flip, Fade} from 'react-reveal'

export default function contents(){ 
  return(
    <div className="contents">
      <div className="about-fadeup">
        <div className="about">
          <Flip left>
            <h1>about us</h1>
          </Flip>
          <div className="test">
            <Fade bottom>
              <div>あ</div>  
            </Fade>
            <Fade bottom>
              <div>あ</div>  
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}