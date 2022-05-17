import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { useLocation, useEffect } from "react";
import Top from "./top/top.js";
import Blog from "./blog/blog.js";

export function Router(){

  const ScrollTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0,0)
    }, [pathname])

    return null
  }

  return(
    <>
      <BrowserRouter>
        <Router>
          <Route path="/" onChange={ScrollTop} element={<Top />} />
          <Route path="/blog" onChange={ScrollTop} element={<Blog />} />
        </Router>
      </BrowserRouter>
    </>
  );
}


