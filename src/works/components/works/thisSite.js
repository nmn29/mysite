import "../../stylesheets/work.css"; 
import "../../stylesheets/thisSite.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function thisSite(){

  return(
    <div className="works-contents">
      <h1>このサイト</h1>
      <p>React.jsを主に使用して個人サイトを作成しました。</p>
      <h2>使用技術</h2>
      ・React.js等<br/>
      ・Heroku<br/>
      <div className="githubLink">
        <a href="https://github.com/nmn29/mysite" target="_blank"><span>GitHub<FontAwesomeIcon icon={faGithubSquare} /></span></a>
      </div>
    </div>
  );

}