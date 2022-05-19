import "../stylesheets/work.css";
import ThisSite from "../components/works/thisSite.js";
import Symm from "../components/works/symm.js";
import Todo from "../components/works/todo.js";
import { Fade } from "react-reveal";

export default function work(){

  const returnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return(
    <div className="works-page">
      <div className="pagetitle">
        WORKS
      </div>
      <ul className="worklist">
        <Fade bottom>
          <li className="thisSite">
            <ThisSite />
          </li>
        </Fade>
        <Fade bottom>
          <li className="symm">
            <Symm />
          </li>
        </Fade>
        <Fade bottom>
          <li className="work">
            <Todo />
          </li>
        </Fade>
      </ul>
      <div className="toTop">
        <a onClick={returnToTop}><span>TOP</span></a>
      </div>
    </div>
  );

}