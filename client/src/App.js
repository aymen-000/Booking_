// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Hotels from "./pages/Hotels";
import Images from "./pages/Images";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { UserContextProvider } from "./UserContext";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path='/hotels/:id/images' element={<Images />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </UserContextProvider>

    </BrowserRouter>
  );
}

export default App;