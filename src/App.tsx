import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Faq, Home, Recruit } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recruit />} />
        {/*<Route path="/news" element={<News />} />*/}
        {/*<Route path="/project" element={<Project />} />*/}
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/*" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
