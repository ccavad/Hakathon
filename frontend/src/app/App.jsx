import { Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../assets/styles/App.css";
import { Board } from "../pages/board/Board";

function App() {
  // const wrapWithSuspense = (element, isPrivate = false) => {
  //   return (
  //     <Suspense fallback={<LoadingSpinner />}>
  //       {isPrivate ? <PrivateRoute>{element}</PrivateRoute> : element}
  //     </Suspense>
  //   );
  // };

  return (
    <ChakraProvider>
      <Board />
    </ChakraProvider>
  );
}

export default App;
