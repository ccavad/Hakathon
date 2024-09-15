import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute"; // Import the PrivateRoute component
import { NotFound } from "../pages/NotFound"; // Import the NotFound component
import { Boards } from "../pages/Boards/Boards";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Home } from "../pages/Home/Home";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Templates } from "../pages/Templates/Templates";
import { Board } from "../pages/board/Board";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Suspense } from "react";

const wrapWithSuspense = (element, isPrivate = false) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {isPrivate ? <PrivateRoute>{element}</PrivateRoute> : element}
    </Suspense>
  );
};

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={wrapWithSuspense(<Home />, true)} />
        <Route path="/login" element={wrapWithSuspense(<Login />, true)} />
        <Route
          path="/register"
          element={wrapWithSuspense(<Register />, true)}
        />
        <Route path="/b/:id" element={wrapWithSuspense(<Board />)} />
        <Route path="/dashboard" element={wrapWithSuspense(<Dashboard />)}>
          <Route
            path="/dashboard/boards"
            element={wrapWithSuspense(<Boards />)}
          />
          <Route
            path="/dashboard/templates"
            element={wrapWithSuspense(<Templates />)}
          />
          {/* Nested Boards route */}
        </Route>
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={wrapWithSuspense(<NotFound />)} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
