import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPost from "./Componts/all-post";
import Post from "./Componts/post";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPost />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
