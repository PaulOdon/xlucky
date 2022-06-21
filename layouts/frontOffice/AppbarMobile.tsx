import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  FormControl,
  ListItemIcon,
  Menu,
  MenuItem,
  Select,
  Stack,
  styled,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CustomOptionValue, CustomSpan, SelectImage } from "./AppbarDesktop";

const AppbarMobile = (props: any) => {
  const [age, setAge] = React.useState("7.98600100");
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const pages = ["Referral program", "How to play?", "FaQ"];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpenNavMenu}
                
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseNavMenu}
                  sx={{ px: 5 }}
                >
                  <Typography textAlign="center" color="#fff">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
       
          <BtEndSelectContainer spacing={0}>
            <FormControl sx={{ m: 0, minWidth: 100 }} size="small">
              <CustomSelect
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="7.98600100">
                  <CustomOptionValue>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <SelectImage src="/images/select.png" />
                    </ListItemIcon>
                    <Typography variant="body1" color="#fff">
                      7.986001<CustomSpan>00</CustomSpan>
                    </Typography>
                  </CustomOptionValue>
                </MenuItem>
                <MenuItem value="7.98600155">
                  <CustomOptionValue>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <SelectImage src="/images/select.png" />
                    </ListItemIcon>
                    <Typography variant="body1" color="#fff">
                      7.986001<CustomSpan>55</CustomSpan>
                    </Typography>
                  </CustomOptionValue>
                </MenuItem>
                <MenuItem value="7.98600101">
                  <CustomOptionValue>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <SelectImage src="/images/select.png" />
                    </ListItemIcon>
                    <Typography variant="body1" color="#fff">
                      7.986001<CustomSpan>01</CustomSpan>
                    </Typography>
                  </CustomOptionValue>
                </MenuItem>
                <MenuItem value="7.986001770">
                  <CustomOptionValue>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <SelectImage src="/images/select.png" />
                    </ListItemIcon>
                    <Typography variant="body1" color="#fff">
                      7.986001<CustomSpan>70</CustomSpan>
                    </Typography>
                  </CustomOptionValue>
                </MenuItem>
              </CustomSelect>
            </FormControl>
            <BtnAdd variant="contained" size="large" startIcon={<AddIcon />}>
              Wallet
            </BtnAdd>
          </BtEndSelectContainer>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="images/profile.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ px: 5 }}
                >
                  <Typography textAlign="center" color="#fff">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppbarMobile;

const BtnAdd = styled(Button)(({ theme }) => ({
  backgroundColor: "#3662D2",
  [theme.breakpoints.down("sm")]: {
    marginBottom: 5,
  },
}));

const CustomSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#40166C",
  color: "#FFF",
  borderRadius: 5,
  borderColor: "#2E045A",
}));

const BtEndSelectContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    margin: "5px 0",
  },
}));
