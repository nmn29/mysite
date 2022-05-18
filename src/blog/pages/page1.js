import Header from "../../top/components/header.js";
import "../stylesheet/pages.css";
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
export default function page1(){
  return(
    <div className="page">
      <Header />
        <Fade>
          <div className="global-page">
            <img src="https://twemoji.maxcdn.com/v/latest/svg/1f44d.svg"/>
              <h1>個人サイト作ってみました</h1>
              <h2>2022-05-17</h2>

              <div className="page-content">
                <p>
                  web制作の学習の一環として、個人サイトを作成してみました。（楽しすぎ）
                </p>
                <p>
                  使用技術：React.js<br/>
                  他：VsCode, framer-motion, react-reveal等
                </p>
                <br/>
                <p>
                  なるべく視覚的に楽しめるようなサイトを目指しました。<br/>
                  今後は卒論も含め、動的なwebアプリを作成していきたいです。
                </p>
            </div>
          </div>
          <div className="backToBlog">
            <Link to="/blog">
              一覧へ戻る
            </Link>
          </div>
        </Fade>
    </div>
  );
}