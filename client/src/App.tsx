import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import money from "./pages/auth/money.jpg";

function App() {
  return (
    <Router>
      <div className="app-container" style={{ backgroundImage: `url(${money})` }}>
        <Routes>
          <Route
            path="/"
            element={
              <SignedOut>
                <div className="route-container">
                  <Auth />
                </div>
              </SignedOut>
            }
          />
          <Route
            path="/dashboard"
            element={
              <SignedIn>
                <FinancialRecordsProvider>
                  <div className="route-container dashboard-container">
                    <Dashboard />
                  </div>
                </FinancialRecordsProvider>
              </SignedIn>
            }
          />
          {/* Redirect any unknown paths to the login/signup page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
