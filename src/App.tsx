import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Recruit } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/news" element={<News />} />*/}
        {/*<Route path="/project" element={<Project />} />*/}
        <Route path="/recruit" element={<Recruit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
