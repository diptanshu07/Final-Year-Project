import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import DrawerComp from "./Drawer";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "linear-gradient(45deg, #fff8f6 30%, #ffe5e0 90%)" }}>
        <Toolbar>
          <NoteAltRoundedIcon sx={{ transform: "scale(2)" }} /> 
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Clever
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" 
                    onClick={() => {
                        const element = document.getElementById("hero");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                />
                <Tab label="Features" 
                    onClick={() => {
                        const element = document.getElementById("features");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}    
                />
                <Tab label="Solutions" 
                    onClick={() => {
                        const element = document.getElementById("solutions");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                />

                <Tab label="Pricing" 
                    onClick={() => {
                        const element = document.getElementById("pricing");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                />
                <Tab label="Contact Us" 
                    onClick={() => {
                        const element = document.getElementById("footer");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained"
                onClick={() => {
                    const element = document.getElementById("register");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                }}
              >
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained"
                onClick={() => {
                    const element = document.getElementById("register");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                }}
              >
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
