import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import Page from "./pages/Page";

const App: React.FC = () => {
  return (
    <Router>
      <Menu>
        <MenuButton as={Button}>きりかえ</MenuButton>
        <MenuList>
          <MenuItem as={Link} to="/page1">
            ほいくえんにいくまえ
          </MenuItem>
          <MenuItem as={Link} to="/page2">
            でかけるとき
          </MenuItem>
          <MenuItem as={Link} to="/page3">
            ねるまでにやること
          </MenuItem>
        </MenuList>
      </Menu>
      <Routes>
        <Route path="/:pageId" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
