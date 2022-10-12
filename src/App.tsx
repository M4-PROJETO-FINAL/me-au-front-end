import FormLogin from "./components/FormLogin";
import Header from "./components/Header";
import UserContextProvider from "./contexts/UserContext";
import { AppRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        {/* <Header /> */}
        <FormLogin />
        <AppRoutes />
      </UserContextProvider>
    </>
  );
}

export default App;
