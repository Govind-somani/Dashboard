// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignIn from "./Screens/Auth/SignIn";
// import Dashboard from "./Screens/App/DashBoard/Dashboard";
import ProtectedRoutes from "./Layout/ProtectedRoutes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import GlobalStyles from "./Compnonent/GlobalStyles";
// import UserList from "./Screens/App/Member/User";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ProtectedRoutes />
    </ThemeProvider>
  );
};

export default App;
