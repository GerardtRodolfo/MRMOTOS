import React from "react";
//import { useNavigate } from "react-router-dom";
//import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

const Home = () => {
  // const { signout } = useAuth();
  // const navigate = useNavigate();

  return (
    <>
      <Menu />
      <Header />
    </>
  );
};

export default Home;