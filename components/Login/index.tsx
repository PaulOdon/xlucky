import React from "react";
import { Check, Email, Lock } from "@mui/icons-material";
import { Button, Checkbox, TextField, Typography } from "@mui/material";
import palette from "../../themes/palette";
import styles from "../../styles/Register.module.css";
import SocialMediaIcon from "../Register/SocialMediaIcon";

const Login = (props: any) => {
  const closeLoginDialog = () => {
    props.handleCloseLogin(false);
  };

  const handleClickRP = () => {
    props.handleCloseLogin(false);
    props.handleClickResetPwd();
    console.log("handle click RP login component");
  };

  return (
    <>
      <div style={registerStyles.wraper}>
        <div style={registerStyles.formContainer}>
          <Typography variant="h5">LOGIN</Typography>
          <Typography variant="body2">Or Login witch</Typography>
          <SocialMediaIcon />
          <div style={registerStyles.inputContainer}>
            <TextField
              className={styles.inputForm}
              variant="outlined"
              label="Email"
              size="medium"
              color="success"
              value={"info@lucky.io"}
              InputProps={{
                startAdornment: (
                  <Email
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
              color="info"
              size="medium"
              value={"password"}
              type={"password"}
              InputProps={{
                startAdornment: (
                  <Lock style={{ color: "#fff", marginRight: 10 }} />
                ),
              }}
            />
          </div>
          <Typography style={{ fontSize: 12, width: "100%", lineHeight: 0.01 }}>
            <Checkbox
              defaultChecked
              inputProps={{ "aria-label": "Checkbox" }}
              color={"success"}
            />{" "}
            By accessing the site, I confirm that I am 21 years old and I have
            read{" "}
            <span style={{ color: palette.info.main, cursor: "pointer" }}>
              the terms of service
            </span>
          </Typography>
          <Button
            style={{ width: "100%", marginTop: "30px" }}
            size="large"
            variant="contained"
            color="secondary"
            sx={{ marginBlock: 1 }}
          >
            LOGIN
          </Button>
          <Typography variant="body2">
            Forgot Password
            <Button
              style={{ color: palette.info.main }}
              onClick={handleClickRP}
            >
              Reset
            </Button>
          </Typography>
        </div>
        <img
          style={registerStyles.closeButton}
          src="/images/close.png"
          alt="close"
          onClick={closeLoginDialog}
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

export default Login;
