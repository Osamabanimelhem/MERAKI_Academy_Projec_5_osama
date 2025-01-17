import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import RightBar from "../../components/RightBar/RightBar";
import Feed from "../../components/Feed/Feed";
import Add from "../../components/Add/Add";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Main = () => {
  const [mode, setMode] = useState("light");
  const Navigation = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.token) {
      Navigation("/home");
    } else {
      Navigation("/login");
    }
  }, []);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });
  return (
    <div className="root-layout">
      <header>
        <NavBar />
      </header>

      <main style={{ marginTop: "55px" }}>
        {/* <ThemeProvider theme={darkTheme}> */}
        {/* <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Feed/>

        </Stack>
      
      </Box> */}
        {/* </ThemeProvider> */}
        {/* Outlet : it the subRouter of Main {children:[]} */}
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
