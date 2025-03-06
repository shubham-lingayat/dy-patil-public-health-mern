import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import LeadsPage from "./pages/Leads";

function App() {
  return (
    <div>
      {/* Defining Routes by Neasted Routes */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;