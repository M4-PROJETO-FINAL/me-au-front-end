import { ThemeProvider } from "@mui/material";

import Header from "./components/Header";
import UserContextProvider from "./contexts/UserContext";
import { AppRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyles";
import { MUITheme } from "./styles/themes";
import "./i18n";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <ThemeProvider theme={MUITheme}>
          <Header />
          <AppRoutes />
        </ThemeProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
