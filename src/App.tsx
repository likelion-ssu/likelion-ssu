import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Home, Recruit, Faq } from "./pages";
=======
import { Faq, Home, Recruit } from "./pages";
>>>>>>> main

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/news" element={<News />} />*/}
        {/*<Route path="/project" element={<Project />} />*/}
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/faq" element={<Faq />} />
<<<<<<< HEAD
=======
        <Route path="/*" element={<Home />} />
>>>>>>> main
      </Routes>
    </BrowserRouter>
  );
}

export default App;
