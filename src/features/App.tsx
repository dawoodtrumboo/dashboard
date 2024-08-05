import BaseLayout from "@design-system/BaseLayout";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./dashboard/layout";

function App() {
  return (
    <div style={{ minHeight: "100vh", width: "100vw" }}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<DashboardLayout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
