import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { Link as RouterLink, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import LiveSearch from "../LiveSearch/LiveSearch";

import { useCart } from "../../Context/CartContextProvider";
import { useAuth } from "../../Context/AuthContextProvider";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { getCartLength, cartLength } = useCart();

  const { currentUser, logOutUser } = useAuth();

  React.useEffect(() => {
    getCartLength();
  }, []);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>{currentUser?.user}</MenuItem>
      )}

      {currentUser?.isLogged && (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            logOutUser();
          }}
        >
          Log out
        </MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/register" className="mobile-link">
            Register
          </NavLink>
        </MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/login" className="mobile-link">
            Login
          </NavLink>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to="/about" className="mobile-link">
          <IconButton size="large" color="inherit"></IconButton>
          <p>About</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/products" className="mobile-link">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          ></IconButton>
          <p>Shop</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/feedbacks" className="mobile-link">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          ></IconButton>
          <p>Feedbacks</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/local" className="mobile-link">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          ></IconButton>
          <p>Location</p>
        </NavLink>
      </MenuItem>
      {currentUser?.isAdmin && (
        <MenuItem>
          <NavLink to="/admin" className="mobile-link">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <InfoIcon />
            </IconButton>
            <p>Admin</p>
          </NavLink>
        </MenuItem>
      )}

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          // color="inherit"
          sx={{ color: currentUser?.isLogged ? "green" : "white" }}
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ position: "sticky", top: 0, right: 0, left: 0, zIndex: 11 }}>
      <AppBar position="static" className="navbar-container">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontSize: "14px",
              }}
              component={NavLink}
              to="/"
            >
              <img
                src="https://media.istockphoto.com/vectors/letter-ar-logo-design-for-business-and-company-identity-ar-letter-vector-id1327686573?k=20&m=1327686573&s=170667a&w=0&h=X6lacIn0Ed6yNm3d9TH86f0lpwcxP16vYLIPRF1JHKA="
                alt=""
                width="50px"
              />
            </Button>
          </IconButton>

          {/* Живой поиск */}
          <LiveSearch />
          {/* Живой поиск */}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontSize: "14px",
              }}
              component={NavLink}
              to="/products"
            >
              SHOP
            </Button>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontSize: "14px",
              }}
              component={NavLink}
              to="/about"
            >
              ABOUT
            </Button>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontSize: "14px",
              }}
              component={NavLink}
              to="/feedbacks"
            >
              FEEDBACKS
            </Button>

            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontSize: "14px",
              }}
              component={NavLink}
              to="/local"
            >
              LOCATION
            </Button>
            {currentUser?.isAdmin && (
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "16px",
                }}
                component={NavLink}
                to="/admin"
              >
                ADMIN
              </Button>
            )}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <RouterLink to="/cart" style={{ color: "black" }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={+cartLength} color="warning">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </RouterLink>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
