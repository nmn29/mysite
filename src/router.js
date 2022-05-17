import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./top/top.js";
import Blog from "./blog/blog.js";

export default function router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Top />} />
        <Route path={`/blog/`} element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}
