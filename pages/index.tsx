import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Register from "../components/Register";
import { useAppDispatch } from "../hooks/reduxHooks";
import FrontOfficeLayout from "../layouts/frontOffice";
import { changeBorderRadius } from "../redux/slices/customizationSlice";
import themes from "../themes";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>xLucky - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/xLucky.png" />
      </Head>
      <FrontOfficeLayout />

      <main></main>
    </div>
  );
};

export default Home;
