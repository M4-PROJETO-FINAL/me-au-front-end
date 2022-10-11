import Header from "./components/Header";
import UserContextProvider from "./contexts/UserContext";
import { AppRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <Header />
        <AppRoutes />
      </UserContextProvider>
    </>
  );
}

export default App;
