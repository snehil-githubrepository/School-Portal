import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import { indigo } from "@mui/material/colors";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { authState } from "../../../store/atoms/auth";
import { useRecoilValue, useSetRecoilState } from "recoil";

const GradientMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "0.75rem",
    padding: theme.spacing(1),
    background: "linear-gradient(to right, #0F766E, #1F2937)", // Custom gradient colors
    minWidth: "12rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    [theme.breakpoints.down("sm")]: {
      minWidth: "10rem", // Adjust for mobile responsiveness
    },
  },
}));

const GradientMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "#fff", // White text for contrast
  fontWeight: "500", // Slightly bold text for emphasis
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Lighter background on hover
  },
}));

const LogoutMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "#D22B2B",
  fontWeight: "bold",
  borderRadius: "4%",
  "&:hover": {
    backgroundColor: "red",
  },
}));

function Appbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const auth = useRecoilValue(authState);
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const studentToken = localStorage.getItem("studentToken");
    const teacherToken = localStorage.getItem("teacherToken");
    const adminToken = localStorage.getItem("token");

    if (studentToken || teacherToken || adminToken) {
      setAuthState({ isAuthenticated: true });
    } else {
      setAuthState({ isAuthenticated: false });
    }
  }, [setAuthState]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("teacherToken");
    localStorage.removeItem("token");
    setAuthState({ isAuthenticated: false });
    navigate("/");
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#115E59" }}
      elevation={0}
    >
      <Toolbar className="w-full max-w-[1440px] mx-auto">
        <div className="w-full flex items-center justify-between font-poppins">
          <div
            onClick={() => navigate("/")}
            className="flex cursor-pointer items-center"
          >
            <p className="font-bold font-sans text-2xl">Shivam Public</p>
          </div>
          <div
            className="appbar-buttons hidden md:flex font-serif text-xl"
            style={{ gap: "2rem" }}
          >
            <p
              className="appbar-link cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </p>
            <p
              className="appbar-link cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About Us
            </p>
            <p
              className="appbar-link cursor-pointer"
              onClick={() => navigate("/academics")}
            >
              Academics
            </p>
            <p
              className="appbar-link cursor-pointer"
              onClick={() => navigate("/admissions")}
            >
              Admissions
            </p>
            <p
              className="appbar-link cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact
            </p>
          </div>
          <div className="appbar-buttons hidden md:flex">
            {auth.isAuthenticated ? (
              <PrimaryButton
                color="logout"
                extra_styles={{ fontFamily: "serif", padding: "9.5px" }}
                onClick={handleLogout}
              >
                Logout
              </PrimaryButton>
            ) : (
              <></>
            )}
          </div>
          <div className="md:hidden">
            <IconButton
              aria-label="open menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <GradientMenu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {[
                // Provide an array instead of Fragment
                <GradientMenuItem
                  key="home"
                  onClick={() => {
                    navigate("/");
                    handleClose();
                  }}
                >
                  Home
                </GradientMenuItem>,
                <GradientMenuItem
                  key="about"
                  onClick={() => {
                    navigate("/about");
                    handleClose();
                  }}
                >
                  About Us
                </GradientMenuItem>,
                <GradientMenuItem
                  key="academics"
                  onClick={() => {
                    navigate("/academics");
                    handleClose();
                  }}
                >
                  Academics
                </GradientMenuItem>,
                <GradientMenuItem
                  key="admissions"
                  onClick={() => {
                    navigate("/admissions");
                    handleClose();
                  }}
                >
                  Admissions
                </GradientMenuItem>,
                <GradientMenuItem
                  key="contact"
                  onClick={() => {
                    navigate("/contact");
                    handleClose();
                  }}
                >
                  Contact
                </GradientMenuItem>,
                auth.isAuthenticated && (
                  <LogoutMenuItem
                    key="logout"
                    onClick={() => {
                      handleLogout();
                      handleClose();
                    }}
                  >
                    Logout
                  </LogoutMenuItem>
                ),
              ]}
            </GradientMenu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
