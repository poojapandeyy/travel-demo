import { BrowserRouter, Routes, Route } from "react-router-dom";
import PATH from "./constant/path";
import Home from "./home/home";
import Banner from "./components/header/banner";
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Banner />
        <Routes>
          <Route path={PATH.home} element={<Home />} />
          {/* <Route path={PATH.virtualcall} element={<virtualcall />} /> */}
          {/* <Route path={PATH.chat} element={<chat />} /> */}
          <Route path={PATH.menu} element={<menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;