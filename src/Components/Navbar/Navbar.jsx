import React from "react";

import { Link as RouterLink, NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import MoreIcon from "@mui/icons-material/MoreVert";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import "./Navbar.css";
import LiveSearch from "../LiveSearch/LiveSearch";
import { useCart } from "../../Context/CartContextProvider";
import { useAuth } from "../../Context/AuthContextProvider";
import { useFavorite } from "../../Context/FavoriteContextProvider";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { getCartLength, cartLength } = useCart();
  const { fav } = useFavorite();
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
          <p onClick={handleMobileMenuClose}>About</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/products" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Shop</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/feedbacks" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Feedbacks</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/local" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Location</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/cart" className="mobile-link">
          <p onClick={handleMobileMenuClose}>My Cart</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/favorite" className="mobile-link">
          <p onClick={handleMobileMenuClose}>My Favorites</p>
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
          sx={{ color: currentUser?.isLogged ? "warning" : "inherit" }}
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

                fontSize: "14px",
              }}
              component={NavLink}
              to="/"
            >
              SJ Bakery
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
                  color: "black",
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
            <RouterLink to="/favorite" style={{ color: "black" }}>
              <IconButton
                size="large"
                edge="end"
                aria-haspopup="true"
                color="inherit"
              >
                {fav.products.length > 0 ? (
                  <BookmarksIcon color="warning" />
                ) : (
                  <BookmarkIcon />
                )}
              </IconButton>
            </RouterLink>
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
              sx={{ color: currentUser?.isLogged ? "green" : "black" }}
            >
              {currentUser?.isAdmin ? (
                <AdminPanelSettingsIcon />
              ) : (
                <AccountCircle />
              )}
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
