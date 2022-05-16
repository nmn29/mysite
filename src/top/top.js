import Header from "./components/header.js"
import Main from "./components/main.js"
import Contents from "./components/contents.js"
import Footer from "./components/footer.js"

export default function top(){
  return(
    <div className="top">  
      <Header/>
      <Main/>
      <Contents/>
      <Footer/>
    </div>
  );
}