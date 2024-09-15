import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Boards from "./pages/Boards/Boards";
import { PrivateRoute } from "./PrivateRoute"; // Import the PrivateRoute component
import { NotFound } from "./pages/NotFound"; // Import the NotFound component
import { Templates } from "./pages/Templates/Templates";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/boards" element={<Boards />} />
            <Route path="/dashboard/templates" element={<Templates />} />
            {/* Nested Boards route */}
          </Route>
        </Route>
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
