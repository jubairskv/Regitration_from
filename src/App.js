import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login ";
import Registration from "./components/Registration";
import Home from "./components/Home";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<ProtectedRoute/>}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
