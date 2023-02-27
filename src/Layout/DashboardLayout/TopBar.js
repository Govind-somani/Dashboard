import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Badge, Box, Hidden, IconButton, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import { makeStyles } from "@mui/styles";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import InputIcon from "@mui/icons-material/Input";
// import { useDispatch } from "react-redux";
import Logo from "../../Compnonent/Logo";
// import * as authActions from '../../store/actions/auth';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60,
  },
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    // dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <AppBar
      // position="static"
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <Hidden lgUp style={{ marginTop: " 65px" }}>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Hidden>
        <IconButton color="inherit" onClick={onLogoutHandler}>
          <InputIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
