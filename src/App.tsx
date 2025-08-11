// React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React-Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

// Pages
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Dashboard from "./components/Pages/Dashboard";
import EditProfile from "./components/Pages/EditProfile";
import GoogleRedirectHandler from "./components/GoogleRedirectHandler";

// Context
import { UserProvider } from "./context/UserContext";
import GithubCallback from "./components/GithubCallback";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <ToastContainer autoClose={3000} position="top-center" theme="dark" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/auth/google/callback"
            element={<GoogleRedirectHandler />}
          />
          <Route path="/auth/github/callback" element={<GithubCallback />} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
