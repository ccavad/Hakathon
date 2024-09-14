import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Boards from "./pages/Boards/Boards"; // Import the Boards component

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/boards" element={<Boards />} />
          {/* Add Boards route */}
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
