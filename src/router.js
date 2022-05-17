import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./top/top.js";
import Blog from "./blog/blog.js";

export function Router(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


