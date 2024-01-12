import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
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

const getRedirectPath = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();

  if (hour >= 17) {
    return "/page3";
  } else if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour < 9) {
    return "/page1";
  } else {
    return "/page2";
  }
};

const RedirectToProperTab = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(getRedirectPath());
    }
  }, [location, navigate]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <RedirectToProperTab />
      <Routes>
        <Route path="/:pageId" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
