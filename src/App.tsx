import CustomerReviews from "./components/CustomerReviews";
import Header from "./components/Header";
import UserContextProvider from "./contexts/UserContext";
import { AppRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        {/* <AppRoutes /> */}
        <Header />
        <CustomerReviews />
      </UserContextProvider>
    </>
  );
}

export default App;
