import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { TabList, Tabs, Tab } from "@chakra-ui/react";
import Page from "./pages/Page";

const Navigation: React.FC = () => {
  const location = useLocation();
  const tabIndexMap: { [key: string]: number } = {
    "/page1": 0,
    "/page2": 1,
    "/page3": 2,
  };
  const tabIndex = tabIndexMap[location.pathname] || 0;

  return (
    <Tabs index={tabIndex}>
      <TabList>
        <Tab as={Link} to="/page1">
          ほいくえんにいくまえ
        </Tab>
        <Tab as={Link} to="/page2">
          でかけるとき
        </Tab>
        <Tab as={Link} to="/page3">
          ねるまでにやること
        </Tab>
      </TabList>
    </Tabs>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/:pageId" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
