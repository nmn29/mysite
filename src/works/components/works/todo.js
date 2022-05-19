import "../../stylesheets/work.css"; 
import "../../stylesheets/thisSite.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function todo(){

  return(
    <div className="works-contents">
      <h1>Todo List</h1>
      <p>React.jsを主に使用してTodoListを作成しました。</p>
      <h2>使用技術</h2>
      ・React.js等<br/>
      ・Chakra-UI<br/>
      <div className="githubLink">
        <a href="https://github.com/nmn29/Todo_List" target="_blank"><span>GitHub<FontAwesomeIcon icon={faGithubSquare} /></span></a>
      </div>
    </div>
  );
}