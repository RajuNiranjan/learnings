import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import TransactionPage from "./pages/TransactionPage";
import { useQuery } from "@apollo/client";
import { GET_AUTH_USER } from "./graphql/queries/user.query";
import { Toaster } from "react-hot-toast";

function App() {
  const { loading, data } = useQuery(GET_AUTH_USER);
  console.log("data", loading, data);
  if (loading) return null;

  return (
    <>
      <>
        <Routes>
          <Route
            path="/"
            element={data.authUser ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!data.authUser ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!data.authUser ? <SignUpPage /> : <Navigate to="/" />}
          />
          <Route
            path="/transaction/:id"
            element={
              data.authUser ? <TransactionPage /> : <Navigate to="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </>
    </>
  );
}
export default App;
