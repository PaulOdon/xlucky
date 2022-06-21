import {
  Check,
  CheckCircleOutlined,
  EmailOutlined,
  Lock,
} from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import palette from "../../themes/palette";
import styles from "../../styles/Register.module.css";
import SocialMediaIcon from "./SocialMediaIcon";

const Register = (props: any) => {
  const closeModal = () => {
    props.handleCloseRegister(false);
  };

  const handleClickLogin = () => {
    props.handleCloseRegister(false);
    props.clickLoginButtonByRef();
  };

  return (
    <>
      <div style={registerStyles.wraper}>
        <div style={registerStyles.formContainer}>
          <Typography variant="h5">REGISTER</Typography>
          <Typography variant="body2">Or Login witch</Typography>
          <SocialMediaIcon />
          <div style={registerStyles.inputContainer}>
            <TextField
              className={styles.inputForm}
              variant="outlined"
              label="Email"
              color="success"
              value={"info@lucky.io"}
              size="medium"
              InputProps={{
                startAdornment: (
                  <EmailOutlined
                    style={{ color: palette.success.main, marginRight: 10 }}
                  />
                ),
                endAdornment: <Check style={{ color: palette.success.main }} />,
              }}
              sx={{ marginBlock: 2 }}
            />
            <TextField
              variant="outlined"
              label="Password"
              type={"password"}
              value={"password"}
              color="info"
              size="medium"
              InputProps={{
                startAdornment: (
                  <Lock style={{ color: "#fff", marginRight: 10 }} />
                ),
              }}
            />
            <TextField
              variant="outlined"
              label="Promocode"
              size="medium"
              color="info"
              value={"Promocode"}
              InputProps={{
                startAdornment: (
                  <CheckCircleOutlined
                    style={{ color: "#fff", marginRight: 10 }}
                  />
                ),
              }}
              sx={{ marginBlock: 2 }}
            />
          </div>
          <Button
            style={{ width: "100%" }}
            size="large"
            variant="contained"
            color="secondary"
            sx={{ marginBlock: 1 }}
          >
            REGISTER AN ACCOUNT
          </Button>
          <Typography variant="body2">
            Do you have an account?
            <Button
              style={{ color: palette.info.main }}
              onClick={handleClickLogin}
            >
              Log In
            </Button>
          </Typography>
        </div>
        <img
          style={registerStyles.closeButton}
          src="/images/close.png"
          alt="close"
          onClick={closeModal}
        />
      </div>
    </>
  );
};

const registerStyles = {
  wraper: {
    display: "flex",
  },
  formContainer: {
    background: palette.primary.main,
    width: "400px",
    textAlign: "center" as "center",
    padding: "30px",
    color: palette.primary.contrastText,
    borderRadius: "12px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  closeButton: { marginLeft: 5, width: 40, height: 40, cursor: "pointer" },
};

export default Register;
