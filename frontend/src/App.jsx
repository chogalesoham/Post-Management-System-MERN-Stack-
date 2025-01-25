import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPost from "./Components/all-post";
import Post from "./Components/post";

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
