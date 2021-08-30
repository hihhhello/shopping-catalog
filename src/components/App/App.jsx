import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter } from "react-router-dom";
import { auth } from "../../firebase";
import { AppRouter } from "../AppRouter/AppRouter";
import Navbar from "../Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";

export function App() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return error;
  }
  return (
    <BrowserRouter>
      {user && <Navbar />}
      <AppRouter />
      <ToastContainer />
    </BrowserRouter>
  );
}
