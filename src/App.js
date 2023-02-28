import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Screens/Auth/SignIn";
import Dashboard from "./Screens/App/DashBoard/Dashboard";
import ProtectedRoutes from "./Layout/ProtectedRoutes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/app/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      {/* <ProtectedRoutes /> */}
      {/* <ThemeProvider theme={theme}>
        <ProtectedRoutes />
      </ThemeProvider> */}
    </div>
  );
};

export default App;
