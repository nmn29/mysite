import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Top from "./top/top.js";
import Blog from "./blog/blog.js";
import Page1 from "./blog/pages/page1.js";
import Works from "./works/works.js";

export function Router(){

  const Wrapper = ({children}) => {
    const location = useLocation();
      useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
      }, [location.pathname]);
    return children
  } 

  return(
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/works" element={<Works />} />
            <Route path="/blog/page1" element={<Page1 />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}


