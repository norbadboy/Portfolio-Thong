import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  CssBaseline,
  useScrollTrigger,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import "../styles/header.css";
import { StyledEngineProvider } from "@mui/material/styles";
import RocketIcon from "@mui/icons-material/Rocket";

// Define your ScrollTop component
function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 26, right: 26, zIndex: 1000 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function Header(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = ["About", "Passion", "Experience", "Projects", "Contact"];
  return (
    <StyledEngineProvider injectFirst>
      <React.Fragment>
        <CssBaseline />
        <AppBar elevation={0}>
          <Container maxWidth="xl" sx={{ backgroundColor: "black" }}>
            <Toolbar disableGutters>
              <DeveloperModeIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: "33px" }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  fontWeight: 700,
                  fontSize: "19px",
                  textTransform: "uppercase",
                  fontFamily: "Lato, sans-serif",
                  textDecoration: "none",
                  letterSpacing: ".05rem",
                  "&:hover": {
                    color: "lightgrey",
                  },
                }}
              >
                Thong Ho
              </Typography>
              {/* Tablet size */}
              <DeveloperModeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "Lato",
                  fontWeight: 500,
                  fontSize: "20px",
                  letterSpacing: ".05rem",
                  color: "inherit",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                Thong Ho
              </Typography>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon fontSize="lg" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    width: "100%",
                    display: { xs: "block", md: "none" },
                  }}
                  className="header_Menu_Container"
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "black",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "black",
                          color: "lightgrey",
                        },
                      }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "end" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "flex",
                      fontFamily: "Lato",
                      fontWeight: 700,
                      fontSize: "18px",
                      mx: 1,
                      "&:hover": {
                        backgroundColor: "black",
                        color: "lightgrey",
                      },
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...props}>
          <Fab
            size="small"
            aria-label="scroll back to top"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "#000000e6",
                color: "white",
              },
            }}
          >
            <RocketIcon sx={{ padding: " 2px" }} />
          </Fab>
        </ScrollTop>{" "}
      </React.Fragment>
    </StyledEngineProvider>
  );
}
export default Header;
