import React from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar"; // Import Sidebar
import MainContent from "./MainContent"; // Import MainContent
import { Outlet } from "react-router-dom"; // Import Outlet
import Header from "./Header"; // Import Header

const Dashboard = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Header at the top */}
      <Header />

      {/* Sidebar and Main Content layout */}
      <Box display="flex" flex="1">
        <Sidebar width="250px" /> {/* Sidebar with a fixed width */}
        <MainContent flex="1">
          <Outlet /> {/* Render nested routes here */}
        </MainContent>
      </Box>
    </Box>
  );
};

export default Dashboard;
