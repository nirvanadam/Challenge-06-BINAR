import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
