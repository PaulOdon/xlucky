import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import React, { useRef, useState } from "react";
import {
  styled,
  Stack,
  MenuItem,
  FormControl,
  ListItemIcon,
  Tooltip,
  Avatar,
  Menu,
  Dialog,
} from "@mui/material";
import { useTheme } from "@mui/system";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LoginDialog from "../../components/Login/LoginDialog";
import RegisterDialog from "../../components/Register/RegisterDialog";
import ResetPasswordDialog from "../../components/ResetPassword/ResetPasswordDialog";
import ResetPwdFormDialog from "../../components/ResetPasswordForm/ResetPwdFormDialog";

const AppbarDesktop = (props: any) => {
  const theme = useTheme();
  const [age, setAge] = React.useState("7.98600100");
  const [showRegisterDialog, setShowRegisterDialog] = React.useState(false);
  const [showLoginDialog, setShowLoginDialog] = React.useState(false);
  const [showResetPwdDialog, setShowResetPwdDialog] = React.useState(false);
  const [showResetPwdFormDialog, setShowResetPwdFormDialog] =
    React.useState(false);
  const [isConnected, setIsConnected] = React.useState(false);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const loginButtonRef: any = useRef(null);

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

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  /**
   * Register
   */
  const handleClickRegister = () => {
    setShowRegisterDialog(true);
  };

  const handleCloseRegister = () => {
    setShowRegisterDialog(false);
  };

  /**
   * Login
   */
  const handleClickLoginButtonByRef = () => {
    loginButtonRef.current.click();
  };

  const handleClickLogin = () => {
    setShowLoginDialog(true);
  };

  const handleCloseLogin = () => {
    setShowLoginDialog(false);
  };

  /**
   * mail to reset pwd
   */
  const handleClickResetPwd = () => {
    setShowResetPwdDialog(true);
  };

  const handleCloseRP = () => {
    setShowResetPwdDialog(false);
  };

  /**
   * reset pwd form
   */
  const handleClickResetPwdForm = () => {
    setShowResetPwdFormDialog(true);
  };

  const handleCloseRPForm = () => {
    setShowResetPwdFormDialog(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <LuckyToolbar>
          <AppLogo src="/images/logo/logo.png" />
          <MenuContainer direction="row" spacing={2}>
            <Button variant="text" color="inherit">
              Referral program
            </Button>
            <Button variant="text" color="inherit">
              How to play?
            </Button>
            <Button variant="text" color="inherit">
              FaQ
            </Button>
          </MenuContainer>
          <BtEndSelectContainer spacing={0}>
            <FormControl sx={{ m: 0, minWidth: 160 }} size="small">
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
            {isConnected ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="images/profile.png" />
                  <Stack direction="row" spacing={1} sx={{ ml: 2 }}>
                    <Typography variant="body1" color="#fff">
                      Vlad Bortnovskyi
                    </Typography>
                    <KeyboardArrowDownIcon />
                  </Stack>
                </IconButton>
              </Tooltip>
            ) : (
              <MenuContainer direction="row" spacing={2}>
                <Button
                  variant="text"
                  color="inherit"
                  onClick={handleClickRegister}
                >
                  Register
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  onClick={handleClickLogin}
                  ref={loginButtonRef}
                >
                  Login
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  onClick={handleClickResetPwdForm}
                >
                  RPwdF
                </Button>
              </MenuContainer>
            )}
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
        </LuckyToolbar>
      </AppBar>

      <RegisterDialog
        showRegisterDialog={showRegisterDialog}
        handleCloseRegister={handleCloseRegister}
        handleClickLoginButtonByRef={handleClickLoginButtonByRef}
      />

      <LoginDialog
        showLoginDialog={showLoginDialog}
        handleCloseLogin={handleCloseLogin}
        handleClickResetPwd={handleClickResetPwd}
      />

      <ResetPasswordDialog
        showRPDialog={showResetPwdDialog}
        handleCloseRP={handleCloseRP}
        handleClickLoginButtonByRef={handleClickLoginButtonByRef}
      />

      <ResetPwdFormDialog
        showResetPwdFormDialog={showResetPwdFormDialog}
        handleCloseRPForm={handleCloseRPForm}
      />
    </Box>
  );
};

export default AppbarDesktop;

const BtnAdd = styled(Button)(({ theme }) => ({
  backgroundColor: "#3662D2",
}));

export const CustomSpan = styled("span")(({ theme }) => ({
  color: "#AE77E9",
}));

export const SelectImage = styled("img")(({ src, theme }: any) => ({
  src: `url(${src})`,
  width: 22,
  height: 22,
}));

export const CustomOptionValue = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const CustomSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#40166C",
  color: "#FFF",
  borderTopRightRadius: 0,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 0,
  borderColor: "#2E045A",
}));

const BtEndSelectContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const MenuContainer = styled(Stack)(({ theme }) => ({}));

const LuckyToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const AppLogo = styled("img")(({ src, theme }: any) => ({
  src: `url(${src})`,
  width: 108,
  height: 60,
}));
