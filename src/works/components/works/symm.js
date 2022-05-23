import "../../stylesheets/work.css"; 
import "../../stylesheets/symm.css"
import symmGIF from "../../images/SYMM.gif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function symm(){
  return(
    <div className="works-contents">
      <h1>SYMM bot</h1>
      <p>
        直近の画像をシンメトリー化するDiscord botを作成しました。<br/>
        GitHubを活用し先輩等と共同開発しました。(2021/11)<br/>
        コード自体はシンプルですが、実際にリリースした所、知人同士での枠を超えて一定の評価を頂けたのが嬉しかったです。<br/>
      </p>
      <img src={symmGIF}></img>
      <h2>使用技術</h2>
      ・Python ( Discord.py / PIL )<br/>
      ・Heroku<br/>
      <div className="githubLink">
        <a href="https://github.com/nmn29/SYMM" target="_blank"><span>GitHub<FontAwesomeIcon icon={faGithubSquare} /></span></a>
      </div>
      <div className="DiscordLink">
        <a href="https://bit.ly/3wEvmRZ" target="_blank"><span>招待</span><img src="https://img.icons8.com/color/480/000000/discord-logo.png"/></a>
      </div>
    </div>
  );
}