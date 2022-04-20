import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Signin from "./pages/signin";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Faqs from "./pages/faqs";
import Request from "./pages/request";
import Registration from "./pages/registration";
import Requests from "./pages/requests";
import Registrations from "./pages/registrations";
import Signup from "./pages/signup";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div>
      {authIsReady && (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/signin_fgc"
                element={
                  (!user && <Signin />) ||
                  (user && <Navigate to="/home" replace />)
                }
              />
              <Route
                path="/signup_fgc"
                element={
                  (!user && <Signup />) ||
                  (user && <Navigate to="/home" replace />)
                }
              />
              <Route
                path="/requests"
                element={
                  (user && <Requests />) ||
                  (!user && <Navigate to="/" replace />)
                }
              />
              <Route
                path="/registrations"
                element={
                  (user && <Registrations />) ||
                  (!user && <Navigate to="/" replace />)
                }
              />
              <Route path="/request" element={<Request />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faqs" element={<Faqs />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
