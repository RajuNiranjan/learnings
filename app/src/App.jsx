import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TransactionPage from "./pages/TransactionPage";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useQuery } from "@apollo/client";
import { GET_AUTHORISED_USER } from "./graphql/queries/user.query";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { data } = useQuery(GET_AUTHORISED_USER);

  return (
    <>
      {data?.authUser && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
