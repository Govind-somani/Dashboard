import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  // Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import {
  // AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  // Lock as LockIcon,
  Settings as SettingsIcon,
  // ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  // UserPlus as UserPlusIcon,
  Users as UsersIcon,
  // Recepit as recepitIcon
} from "react-feather";
import NavItem from "./NavItem";

const items = [
  {
    href: "/app/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/app/user",
    icon: UsersIcon,
    title: "Members",
  },
  {
    // href: '/app/attendance',
    icon: UsersIcon,
    title: "Wallet",
  },
  {
    // href: '/app/clients',
    icon: UsersIcon,
    title: "Reports",
  },
  {
    // href: '/app/projects',
    icon: UsersIcon,
    title: "Withdraw Request",
  },
  // {
  //   href: '/app/tasks',
  //   icon: SettingsIcon,
  //   title: 'Tasks'
  // },
  // {
  //   href: '/app/billDetails',
  //   icon: UsersIcon,
  //   title: 'BillDetails'
  // },
  // {
  //   href: '/app/bills',
  //   icon: UsersIcon,
  //   title: 'Bills'
  // },

  // {
  //   href: '/app/customers',
  //   icon: UsersIcon,
  //   title: 'Customers'
  // },
  // {
  //   href: '/app/products',
  //   icon: ShoppingBagIcon,
  //   title: 'Products'
  // },
  // {
  //   href: '/app/account',
  //   icon: UserIcon,
  //   title: 'Account'
  // },
  // {
  //   href: '/app/settings',
  //   icon: SettingsIcon,
  //   title: 'Settings'
  // }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    marginTop: 65,
    width: 265,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  // const user = useSelector((state) => state.auth.user);
  const user = {
    firstName: "Alan Josff",
    email: "alan@mail.com",
  };
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          // src={user.profileImage}
          // to="/app/account"
        />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.firstName}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.email}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open={openMobile}
          onClose={onMobileClose}
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
