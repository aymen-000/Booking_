// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Hotels from "./pages/Hotels";
import Images from "./pages/Images";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path='/hotels/:id/images' element={<Images/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;