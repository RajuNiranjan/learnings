import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/register";
import TransactionPage from "./pages/TransactionPage";
import NotFound from "./pages/NotFound";
import Header from "./components/ui/header";

const App = () => {
  const authUser = false;
  return (
    <>
      {authUser && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
